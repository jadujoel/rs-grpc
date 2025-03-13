use tonic::{transport::Server, Request, Response, Status};
use tonic_web::GrpcWebLayer;
use tower_http::cors::{AllowHeaders, AllowOrigin, CorsLayer, ExposeHeaders};

use main::greeter_server::{Greeter, GreeterServer};
use main::{HelloRequest, HelloResponse, GoodbyeResponse, GoodbyeRequest};

pub mod main {
    tonic::include_proto!("main");
}

#[derive(Default)]
pub struct MyGreeter {}

#[tonic::async_trait]
impl Greeter for MyGreeter {
    async fn say_hello(
        &self,
        request: Request<HelloRequest>,
    ) -> Result<Response<HelloResponse>, Status> {
        // Log the request body for debugging
        println!("Received HelloRequest: {:?}", request);

        let name = request.into_inner().name;
        let reply = HelloResponse {
            message: format!("Hello, {name}!"),
        };
        Ok(Response::new(reply))
    }

    async fn say_goodbye(
        &self,
        request: Request<GoodbyeRequest>,
    ) -> Result<Response<GoodbyeResponse>, Status> {
        // Log the request body for debugging
        println!("Received GoodbyeRequest: {:?}", request);

        let name = request.into_inner().name;
        let reply = GoodbyeResponse {
            message: format!("Goodbye, {name}!"),
        };
        Ok(Response::new(reply))
    }
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let addr = "127.0.0.1:50051".parse()?;
    let greeter = MyGreeter::default();

    println!("Greeter Server listening on {addr}");

    let svc = GreeterServer::new(greeter);

    // Start the server with the layers applied
    Server::builder()
        .accept_http1(true) // Important for gRPC-Web
        // .layer(service_stack) // Add layers
        .layer(
            CorsLayer::new()
                .allow_origin(AllowOrigin::mirror_request())
                .expose_headers(ExposeHeaders::any())
                .allow_headers(AllowHeaders::any())
        )
        .layer(GrpcWebLayer::new())
        .add_service(svc)
        .serve(addr)
        .await?;

    Ok(())
}
