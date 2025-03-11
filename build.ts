export async function build() {
  await Bun.$`bash build.bash`
  await Bun.build({
    entrypoints: ["./src/index.html"],
    outdir: "dist",
    sourcemap: "linked",
    minify: true,
  })
  await Bun.$`cargo build`
  await Bun.$`cargo build --bin server`
  await Bun.$`cargo build --bin client`
}

if (import.meta.main) {
  await build()
}
