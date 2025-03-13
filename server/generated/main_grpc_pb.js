// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var main_pb = require('./main_pb.js');

function serialize_main_GoodbyeRequest(arg) {
  if (!(arg instanceof main_pb.GoodbyeRequest)) {
    throw new Error('Expected argument of type main.GoodbyeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_main_GoodbyeRequest(buffer_arg) {
  return main_pb.GoodbyeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_main_GoodbyeResponse(arg) {
  if (!(arg instanceof main_pb.GoodbyeResponse)) {
    throw new Error('Expected argument of type main.GoodbyeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_main_GoodbyeResponse(buffer_arg) {
  return main_pb.GoodbyeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_main_HelloRequest(arg) {
  if (!(arg instanceof main_pb.HelloRequest)) {
    throw new Error('Expected argument of type main.HelloRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_main_HelloRequest(buffer_arg) {
  return main_pb.HelloRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_main_HelloResponse(arg) {
  if (!(arg instanceof main_pb.HelloResponse)) {
    throw new Error('Expected argument of type main.HelloResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_main_HelloResponse(buffer_arg) {
  return main_pb.HelloResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_main_TurnOnRequest(arg) {
  if (!(arg instanceof main_pb.TurnOnRequest)) {
    throw new Error('Expected argument of type main.TurnOnRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_main_TurnOnRequest(buffer_arg) {
  return main_pb.TurnOnRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_main_TurnOnResponse(arg) {
  if (!(arg instanceof main_pb.TurnOnResponse)) {
    throw new Error('Expected argument of type main.TurnOnResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_main_TurnOnResponse(buffer_arg) {
  return main_pb.TurnOnResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var GreeterService = exports.GreeterService = {
  sayHello: {
    path: '/main.Greeter/sayHello',
    requestStream: false,
    responseStream: false,
    requestType: main_pb.HelloRequest,
    responseType: main_pb.HelloResponse,
    requestSerialize: serialize_main_HelloRequest,
    requestDeserialize: deserialize_main_HelloRequest,
    responseSerialize: serialize_main_HelloResponse,
    responseDeserialize: deserialize_main_HelloResponse,
  },
  sayGoodbye: {
    path: '/main.Greeter/sayGoodbye',
    requestStream: false,
    responseStream: false,
    requestType: main_pb.GoodbyeRequest,
    responseType: main_pb.GoodbyeResponse,
    requestSerialize: serialize_main_GoodbyeRequest,
    requestDeserialize: deserialize_main_GoodbyeRequest,
    responseSerialize: serialize_main_GoodbyeResponse,
    responseDeserialize: deserialize_main_GoodbyeResponse,
  },
};

exports.GreeterClient = grpc.makeGenericClientConstructor(GreeterService, 'Greeter');
var HeaterService = exports.HeaterService = {
  turnOn: {
    path: '/main.Heater/turnOn',
    requestStream: false,
    responseStream: false,
    requestType: main_pb.TurnOnRequest,
    responseType: main_pb.TurnOnResponse,
    requestSerialize: serialize_main_TurnOnRequest,
    requestDeserialize: deserialize_main_TurnOnRequest,
    responseSerialize: serialize_main_TurnOnResponse,
    responseDeserialize: deserialize_main_TurnOnResponse,
  },
};

exports.HeaterClient = grpc.makeGenericClientConstructor(HeaterService, 'Heater');
