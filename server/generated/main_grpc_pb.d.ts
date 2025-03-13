// package: main
// file: main.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as main_pb from "./main_pb";

interface IGreeterService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sayHello: IGreeterService_IsayHello;
    sayGoodbye: IGreeterService_IsayGoodbye;
}

interface IGreeterService_IsayHello extends grpc.MethodDefinition<main_pb.HelloRequest, main_pb.HelloResponse> {
    path: "/main.Greeter/sayHello";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<main_pb.HelloRequest>;
    requestDeserialize: grpc.deserialize<main_pb.HelloRequest>;
    responseSerialize: grpc.serialize<main_pb.HelloResponse>;
    responseDeserialize: grpc.deserialize<main_pb.HelloResponse>;
}
interface IGreeterService_IsayGoodbye extends grpc.MethodDefinition<main_pb.GoodbyeRequest, main_pb.GoodbyeResponse> {
    path: "/main.Greeter/sayGoodbye";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<main_pb.GoodbyeRequest>;
    requestDeserialize: grpc.deserialize<main_pb.GoodbyeRequest>;
    responseSerialize: grpc.serialize<main_pb.GoodbyeResponse>;
    responseDeserialize: grpc.deserialize<main_pb.GoodbyeResponse>;
}

export const GreeterService: IGreeterService;

export interface IGreeterServer {
    sayHello: grpc.handleUnaryCall<main_pb.HelloRequest, main_pb.HelloResponse>;
    sayGoodbye: grpc.handleUnaryCall<main_pb.GoodbyeRequest, main_pb.GoodbyeResponse>;
}

export interface IGreeterClient {
    sayHello(request: main_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: main_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    sayHello(request: main_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: main_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    sayHello(request: main_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: main_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    sayGoodbye(request: main_pb.GoodbyeRequest, callback: (error: grpc.ServiceError | null, response: main_pb.GoodbyeResponse) => void): grpc.ClientUnaryCall;
    sayGoodbye(request: main_pb.GoodbyeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: main_pb.GoodbyeResponse) => void): grpc.ClientUnaryCall;
    sayGoodbye(request: main_pb.GoodbyeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: main_pb.GoodbyeResponse) => void): grpc.ClientUnaryCall;
}

export class GreeterClient extends grpc.Client implements IGreeterClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public sayHello(request: main_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: main_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    public sayHello(request: main_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: main_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    public sayHello(request: main_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: main_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    public sayGoodbye(request: main_pb.GoodbyeRequest, callback: (error: grpc.ServiceError | null, response: main_pb.GoodbyeResponse) => void): grpc.ClientUnaryCall;
    public sayGoodbye(request: main_pb.GoodbyeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: main_pb.GoodbyeResponse) => void): grpc.ClientUnaryCall;
    public sayGoodbye(request: main_pb.GoodbyeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: main_pb.GoodbyeResponse) => void): grpc.ClientUnaryCall;
}

interface IHeaterService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    turnOn: IHeaterService_IturnOn;
}

interface IHeaterService_IturnOn extends grpc.MethodDefinition<main_pb.TurnOnRequest, main_pb.TurnOnResponse> {
    path: "/main.Heater/turnOn";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<main_pb.TurnOnRequest>;
    requestDeserialize: grpc.deserialize<main_pb.TurnOnRequest>;
    responseSerialize: grpc.serialize<main_pb.TurnOnResponse>;
    responseDeserialize: grpc.deserialize<main_pb.TurnOnResponse>;
}

export const HeaterService: IHeaterService;

export interface IHeaterServer {
    turnOn: grpc.handleUnaryCall<main_pb.TurnOnRequest, main_pb.TurnOnResponse>;
}

export interface IHeaterClient {
    turnOn(request: main_pb.TurnOnRequest, callback: (error: grpc.ServiceError | null, response: main_pb.TurnOnResponse) => void): grpc.ClientUnaryCall;
    turnOn(request: main_pb.TurnOnRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: main_pb.TurnOnResponse) => void): grpc.ClientUnaryCall;
    turnOn(request: main_pb.TurnOnRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: main_pb.TurnOnResponse) => void): grpc.ClientUnaryCall;
}

export class HeaterClient extends grpc.Client implements IHeaterClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public turnOn(request: main_pb.TurnOnRequest, callback: (error: grpc.ServiceError | null, response: main_pb.TurnOnResponse) => void): grpc.ClientUnaryCall;
    public turnOn(request: main_pb.TurnOnRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: main_pb.TurnOnResponse) => void): grpc.ClientUnaryCall;
    public turnOn(request: main_pb.TurnOnRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: main_pb.TurnOnResponse) => void): grpc.ClientUnaryCall;
}
