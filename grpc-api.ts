import {
  clients,
  main,
} from "./proto.ts"

export const greeter = {
  client: clients.greeter,
  async sayHello(options: Parameters<typeof main.HelloRequest.fromObject>[0]): Promise<main.HelloResponse> {
    let { promise, reject, resolve } = Promise.withResolvers<main.HelloResponse>()
    clients.greeter.sayHello(
      main.HelloRequest.fromObject(options),
      (err, response) => err ? reject(err) : resolve(response)
    )
    return promise
  },
  async sayGoodbye(options: Parameters<typeof main.GoodbyeRequest.fromObject>[0]): Promise<main.GoodbyeResponse> {
    let { promise, reject, resolve } = Promise.withResolvers<main.GoodbyeResponse>()
    clients.greeter.sayGoodbye(
      main.GoodbyeRequest.fromObject(options),
      (err, response) => err ? reject(err) : resolve(response!)
    )
    return promise
  }
}

export const heater = {
  client: clients.heater,
  async turnOn(options: Parameters<typeof main.TurnOnRequest.fromObject>[0]): Promise<main.TurnOnResponse> {
    let { promise, reject, resolve } = Promise.withResolvers<main.TurnOnResponse>()
    clients.heater.turnOn(
      main.TurnOnRequest.fromObject(options),
      (err, response) => err ? reject(err) : resolve(response!)
    )
    return promise
  },
}

export const api = {
  greeter,
  heater
}
