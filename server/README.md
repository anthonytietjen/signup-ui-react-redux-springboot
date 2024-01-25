# Server

## Documentation

- This is a Java API that was bootstrapped using `Spring Boot`.
- The data is stored in memory storage. Depending on requirements, we could considering using a database with an ORM or custom DAL layer, or even an S3 bucket with JSON files. If a database is desired, possibilities include a nosql database such as DynamoDB or MongoDB; or a relational database such as Postgres, MySQL, or SQL Server. If hosting in AWS, consider the pros and cons of the managed services including Aurora and DynamoDB based on pricing or other considerations.
- Authentication and Authorization are not implemented. One possible solution could be to add two more endpoints, one for initiating a login which would forward to a third-party provider, and then another one to get and verify the SAML response after the user has signed in to the third-party provider. After validating the SAML response, the second endpoint could either send a jwt with user claims data down to the client, or store session data on the backend and send a Session ID in cookie to the client. Then we could introduce middleware in the backend to check the claims in the jwt or the session depending on the implementation.

## Running locally

### Prerequisites

1. Install AdoptOpenJDK 11 - https://adoptopenjdk.net/

### Running localhost dev server

**MacOS/Linux**

```
./mvnw clean install
./mvnw spring-boot:run
```

**Windows**

```
mvnw clean install
mvnw spring-boot:run
```

### Invoking endpoints locally

1. Using Visual Studio Code, install the `humao.rest-client` extension. (Alternatively we could use something like Postman.)
1. Create an empty file at `/fakeRequests/.env`
1. Open `/fakeRequests/requests.http`
1. Click `Send Request` above the first request listed in that file
1. Take the id from the response and add it to your newly created `.env` file in this format: `ID={ID}`
1. When you click `Send Request` on the `/callback` requests it will use the ID from the `.env` file

## Running unit tests

- **MacOS/Linux**: ./mvnw test
- **Windows**: mvnw test

## Shortcuts taken

1. The `Thing` BLL class is tightly coupled to the storage medium defined in the DAL. Should abstract the DAL layer even further so that BLL won't know what the actual storage medium is.
1. Response headers should be added for extra security (Access-Control-Allow-Origin, Strict-Transport-Security)
1. Depending on the server used, we should remove the X-Powered-By header (if it is added automatically by the server) for security reasons.

## API Documentation

| Endpoint       | Method | Parameters                                  | Status Code | Response Type                                                                                                                |
| -------------- | ------ | ------------------------------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------- |
| /request       | POST   | {body: String}                              | 200         | String                                                                                                                       |
| /callback/{id} | POST   | String                                      | 204         | _empty_                                                                                                                      |
| /callback/{id} | PUT    | {<br>status: String,<br>detail: string<br>} | 204         | _empty_                                                                                                                      |
| /status        | GET    | id                                          | 200         | {<br>status: String,<br>detail: string,<br>body: String,<br>timeStampCreatedUTC: String,<br>timeStampUpdatedUTC: String<br>} |
