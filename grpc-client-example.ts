import { api } from "./grpc-client-api"

await Promise.all([
  api.greeter.sayHello({ name: "Bun Runtime" })
      .andTee(v => console.log(`Greeter Returned Success: ${v.toString()}`))
      .mapErr(e => console.error(`Greeter Returned ${e.name}: ${e.details}`))
  ,
  api.greeter.sayGoodbye({ name: "Bun Runtime" })
      .andTee(v => console.log(`Greeter Returned Success: ${v.toString()}`))
      .mapErr(e => console.error(`Greeter Returned ${e.name}: ${e.details}`))
  ,
  api.heater.turnOn({ when: 0 })
    .andTee(v => console.log(`Heater Returned Success: ${v.toString()}`))
    .mapErr(e => console.error(`Heater Returned ${e.name}: ${e.details}`)),
])
