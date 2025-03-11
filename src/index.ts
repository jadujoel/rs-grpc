import * as api from "./api"
main()
async function main() {
  document.getElementById("say-hello")?.addEventListener("click", async () => {
    document.getElementById("hello-response")!.innerText = await api.hello()
  })
  document.getElementById("say-goodbye")?.addEventListener("click", async () => {
    document.getElementById("goodbye-response")!.innerText = await api.goodbye()
  })
}
