//hosting https://cp.beget.com/main
// login = f928136w
// password = Iwu3yIIE6Z4e


let listener = ngrok :: Session :: builder()
  .authtoken_from_env()
  .connect()
  .await?
  .http_endpoint()
  .domain("my-app.ngrok.dev")
  .circuit_breaker(0.5)
  .compression()
  .deny_cidr("200.2.0.0/16")
  .oauth(OauthOptions::new("google").allow_domain("Marka-sails.com"))
  .listen()
  .await?;


let SecretKey = '3kDaoIIJ7iFfr9H0VyGn1utEreIjLxP26QH8vWXMnxzenwjpENkNyLU9195r7fWz';
let integrationID = '5f1186ff-55f5-4696-92e1-9a2f68adcba6';
