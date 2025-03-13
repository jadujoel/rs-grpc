import { createClientService, main } from "./proto.ts";

export const api = {
  greeter: createClientService(main.GreeterClient, {
    sayHello: { request: main.HelloRequest, response: main.HelloResponse },
    sayGoodbye: { request: main.GoodbyeRequest, response: main.GoodbyeResponse },
  }),
  heater: createClientService(main.HeaterClient, {
    turnOn: { request: main.TurnOnRequest, response: main.TurnOnResponse },
  })
};
