import grpc, { type UntypedServiceImplementation } from "@grpc/grpc-js";
import loader from '@grpc/proto-loader';
import * as proto from './proto';

interface LoadProtoOptions<TName extends string, TServiceNames extends readonly string[]> {
  readonly name: TName
  readonly services: TServiceNames
}

function loadPackage<
const TName extends string = string,
const TServiceNames extends readonly string[] = readonly string[]
>(options: LoadProtoOptions<TName, TServiceNames>): Readonly<Record<TServiceNames[number], grpc.ServiceDefinition>> {
  interface ServiceClientImpl {
    readonly service: grpc.ServiceDefinition
  }

  const clients = grpc.loadPackageDefinition(
    loader.loadSync(`./proto/${options.name}.proto`)
  )[options.name] as Readonly<Record<string, ServiceClientImpl>>

  return options.services.reduce((acc, name) => {
    acc[name as TServiceNames[number]] =  clients[name].service as grpc.ServiceDefinition
    return acc
  }, {} as Record<TServiceNames[number], grpc.ServiceDefinition>)
}

// Utility function to dynamically call fromObject
function createResponse<T>(protoClass: new (...args: any) => T, options: object): T {
  return new protoClass(options);
}

// Higher-order function to create procedure implementations
function createProcedureImplementations<T>(
  handlers: { [key: string]: (request: any) => object },
  responseClasses: { [key: string]: new (...args: any) => T }
): UntypedServiceImplementation {
  return Object.keys(handlers).reduce((acc, methodName) => {
    acc[methodName] = (call: grpc.ServerUnaryCall<any, any>, callback: grpc.sendUnaryData<any>) => {
      const ret = handlers[methodName](call.request);
      if (ret instanceof Error) {
        console.error(`[grpc] ${methodName} ${ret.name}: ${ret.message}`)
        callback(ret, null);
        return;
      }
      const response = createResponse(responseClasses[methodName], ret);
      callback(null, response);
    };
    return acc;
  }, {} as UntypedServiceImplementation);
}

// Add services using the helper function
function addServicesToServer(server: grpc.Server, pkg: Record<string, grpc.ServiceDefinition>, implementations: Record<string, UntypedServiceImplementation>) {
  for (const serviceName in pkg) {
    if (implementations[serviceName]) {
      server.addService(pkg[serviceName], implementations[serviceName]);
    }
  }
  return server
}

export async function startGrpcServer() {
  class GoodbyeError extends Error {
    override name = "GoodbyeError"
    cause = "lonely"
    message = "Don't go."
  }

  // Define handlers and response classes for Greeter service
  const greeterHandlers = {
    sayHello: (request: proto.main.HelloRequest) => ({ message: `Hello ${request.name}!` }),
    // sayGoodbye: (request: proto.main.GoodbyeRequest) => ({ message: `Goodbye ${request.name}` }),
    sayGoodbye: (request: proto.main.GoodbyeRequest) => new GoodbyeError(),
  };

  const greeterResponseClasses = {
    sayHello: proto.main.HelloResponse,
    sayGoodbye: proto.main.GoodbyeResponse,
  };

  // Define handlers and response classes for Heater service
  const heaterHandlers = {
    turnOn: (request: proto.main.TurnOnRequest) => ({ success: true }),
  };

  const heaterResponseClasses = {
    turnOn: proto.main.TurnOnResponse,
  };


  // Create procedure implementations using the higher-order function
  const greeterProcedures = createProcedureImplementations(greeterHandlers, greeterResponseClasses as any);
  const heaterProcedures = createProcedureImplementations(heaterHandlers, heaterResponseClasses);

  const pkg = loadPackage({
    name: "main",
    services: ["Greeter", "Heater"]
  });

  const server = new grpc.Server();
  addServicesToServer(server, pkg, {
    Greeter: greeterProcedures, Heater: heaterProcedures
  });

  const address = "127.0.0.1:50051";
  server.bindAsync(address, grpc.ServerCredentials.createInsecure(), (error, port) => {
    if (error) {
      console.error("Failed to start server:", error);
      return;
    }
    console.log(`Server is running at ${address} port ${port}`);
  });
}

if (import.meta.main) {
  await startGrpcServer()
}
