#!/bin/bash

# Set paths
PROTO_DIR="./proto"
CLIENT_OUT_DIR="./src/generated"

# Ensure output directory exists
mkdir -p $CLIENT_OUT_DIR

buf generate proto

echo "Generating Client Code"
# Run protoc to generate TypeScript gRPC-Web code for the client
protoc -I=$PROTO_DIR $PROTO_DIR/**.proto \
    --plugin=protoc-gen-grpc-web=./node_modules/.bin/protoc-gen-grpc-web \
    --grpc-web_out=import_style=typescript,mode=grpcwebtext:$CLIENT_OUT_DIR \
    --js_out=import_style=commonjs,binary:$CLIENT_OUT_DIR

# --ts_opt=target=web

cargo build
