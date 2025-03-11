# Set paths
PROTO_DIR="./proto"
OUT_DIR="./src/generated"

# Ensure output directory exists
mkdir -p $OUT_DIR
rm -rf $OUT_DIR
mkdir -p $OUT_DIR

# Run protoc to generate TypeScript gRPC-Web code
protoc -I=$PROTO_DIR $PROTO_DIR/**.proto \
    --plugin=protoc-gen-grpc-web=./node_modules/.bin/protoc-gen-grpc-web \
    --grpc-web_out=import_style=typescript,mode=grpcwebtext:$OUT_DIR \
    --js_out=import_style=commonjs,binary:$OUT_DIR
