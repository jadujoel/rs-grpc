// package: main
// file: main.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class TurnOnRequest extends jspb.Message { 
    getWhen(): number;
    setWhen(value: number): TurnOnRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TurnOnRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TurnOnRequest): TurnOnRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TurnOnRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TurnOnRequest;
    static deserializeBinaryFromReader(message: TurnOnRequest, reader: jspb.BinaryReader): TurnOnRequest;
}

export namespace TurnOnRequest {
    export type AsObject = {
        when: number,
    }
}

export class TurnOnResponse extends jspb.Message { 
    getSuccess(): boolean;
    setSuccess(value: boolean): TurnOnResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TurnOnResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TurnOnResponse): TurnOnResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TurnOnResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TurnOnResponse;
    static deserializeBinaryFromReader(message: TurnOnResponse, reader: jspb.BinaryReader): TurnOnResponse;
}

export namespace TurnOnResponse {
    export type AsObject = {
        success: boolean,
    }
}

export class HelloRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): HelloRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HelloRequest.AsObject;
    static toObject(includeInstance: boolean, msg: HelloRequest): HelloRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HelloRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HelloRequest;
    static deserializeBinaryFromReader(message: HelloRequest, reader: jspb.BinaryReader): HelloRequest;
}

export namespace HelloRequest {
    export type AsObject = {
        name: string,
    }
}

export class HelloResponse extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): HelloResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HelloResponse.AsObject;
    static toObject(includeInstance: boolean, msg: HelloResponse): HelloResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HelloResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HelloResponse;
    static deserializeBinaryFromReader(message: HelloResponse, reader: jspb.BinaryReader): HelloResponse;
}

export namespace HelloResponse {
    export type AsObject = {
        message: string,
    }
}

export class GoodbyeRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): GoodbyeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GoodbyeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GoodbyeRequest): GoodbyeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GoodbyeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GoodbyeRequest;
    static deserializeBinaryFromReader(message: GoodbyeRequest, reader: jspb.BinaryReader): GoodbyeRequest;
}

export namespace GoodbyeRequest {
    export type AsObject = {
        name: string,
    }
}

export class GoodbyeResponse extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): GoodbyeResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GoodbyeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GoodbyeResponse): GoodbyeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GoodbyeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GoodbyeResponse;
    static deserializeBinaryFromReader(message: GoodbyeResponse, reader: jspb.BinaryReader): GoodbyeResponse;
}

export namespace GoodbyeResponse {
    export type AsObject = {
        message: string,
    }
}
