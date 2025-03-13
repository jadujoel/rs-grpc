use main::greeter_client::GreeterClient;
use main::HelloRequest;

pub mod main {
    tonic::include_proto!("main");
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let mut client = GreeterClient::connect("http://127.0.0.1:50051").await?;

    let request = tonic::Request::new(HelloRequest {
        name: "Rustacean".into(),
    });

    let response = client.say_hello(request).await?;

    println!("Response: {:?}", response.into_inner().message);

    Ok(())
}
