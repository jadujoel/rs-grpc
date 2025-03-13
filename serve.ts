import home from "./src/index.html"

export async function serve() {
  const server = Bun.serve({
    hostname: "127.0.0.1",
    static: {
      "/": home
    },
    fetch() {
      return new Response("404");
    }
  })

  console.log(`Http Server listening on ${server.url.href}`)
  await Bun.$`cargo run --bin server`.catch(console.log)
}

if (import.meta.main) {
  await serve()
}
