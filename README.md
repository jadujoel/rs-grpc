# rs-grpc

You'll need to have rust installed to build and run the rust server / client.
To install dependencies:

```bash
# Failed to get this to work without installing this dependency globally
npm install -g protoc-gen-js
bun install
```

To Build
```bash
bun build.ts
```

To run with web client:

```bash
bun serve.ts
```

To run with rust backend:
```bash
cargo run --bin=server
```

To run client request with rust:
```bash
cargo run --bin=client
```

To run with typescript backend:
```bash
bun grpc-server.ts
```

To run client request from bun via typescript
```bash
bun grpc-client-example.ts
```
