import service from './generated/main_pb';
import * as clients from "./generated/MainServiceClientPb"

export const client = new clients.GreeterClient("http://127.0.0.1:50051/");

export async function hello() {
  const res = await client.sayHello(new service.HelloRequest().setName("Typescript Frontend"))
  return res.getMessage()
}

export async function goodbye() {
  const res = await client.sayGoodbye(new service.GoodbyeRequest().setName("Typescript Frontend"))
  return res.getMessage()
}
