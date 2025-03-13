import grpc from "@grpc/grpc-js";
import neverthrow from "neverthrow"
export { main } from './gen/ts/main';

export declare class CallError {
  readonly details: string
  readonly code: number
  readonly metadata: grpc.Metadata
  get name(): "Error"
  get message(): string
  get originalLine(): number
  get originalColumn(): number
  get line(): number
  get column(): number
  get sourceURL(): string
  get stack(): string
}

// Helper function to promisify gRPC calls
export function promisifyGrpcCall<Request, Response>(
  clientMethod: (request: Request, callback: (err: Error | null, response?: Response) => void) => void,
  request: Request
): Promise<Response> {
  return new Promise((resolve, reject) => {
    clientMethod(request, (err, response) => {
      if (err) {
        reject(err);
      } else {
        resolve(response!);
      }
    });
  });
}

// Generic function to create service methods
export function createClientServiceMethods<
const Service,
const Methods extends {
  readonly [key: string]: {
    readonly request: new (...args: any) => any;
    readonly response: new (...args: any) => any
  }
}>(
  client: Service,
  methods: Methods
) {
  return Object.keys(methods).reduce((acc, methodName) => {
    const method = methods[methodName];
    // @ts-expect-error
    acc[methodName] = (options: Parameters<typeof method.request.fromObject>[0]): neverthrow.ResultAsync<InstanceType<typeof method.response>, CallError> => {
      // @ts-expect-error
      const request = method.request.fromObject(options);
      // @ts-expect-error
      // return promisifyGrpcCall(client[methodName].bind(client), request);
      return neverthrow.fromPromise(promisifyGrpcCall(client[methodName].bind(client), request), (e) => e as Error);
    };
    return acc;
    // @ts-expect-error
  }, {} as { [K in keyof Methods]: (options: Parameters<Methods[K]['request']['fromObject']>[0]) => neverthrow.ResultAsync<InstanceType<Methods[K]['response']>, CallError> });
}

export function createClientService<
const Service,
const Methods extends {
  readonly [key: string]: {
    readonly request: new (...args: any) => any;
    readonly response: new (...args: any) => any
  }
}>(
  service: Service,
  methods: Methods
) {
  // @ts-expect-error
  const client = new service(
    "127.0.0.1:50051",
    grpc.ChannelCredentials.createInsecure(),
  );
  return {
    client,
    ...createClientServiceMethods(client, methods)
  }
}
