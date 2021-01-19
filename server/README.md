# Server

## Description

The server is a java app using `spring boot`.

## Shortcuts taken
1. Using memory storage. Should instead use a database with an ORM or custom DAL layer. Could use a document/nosql database or a relational database depending on long-term needs.
1. BLL class is tightly coupled to the storage medium defined in the DAL. Should abstract even further so that BLL won't know the storage medium.
1. Response headers should be added for extra security (Access-Control-Allow-Origin, Strict-Transport-Security)
1. Depending on the server used, might ned to remove the X-Powered-By header if it is added automatically by the server
1. Authentication should be added. Once solution could be: Add two more endpoints, one for initiating a login which would forward to a third-party provider, and then another one to get and verify the SAML response after the user has signed in and then either send down a jwt with user provision data to the frontend, or store session data for the user and send down a cookie with the session ID. Then introduce middleware to check the jwt or cookie depending on the implementation.
1. Authorization should be considered to make sure certain user roles can only execute certain actions. Could introduce middleware that either checks the jwt for the user's role, or checks with a central store to find out the user's role.
1. The thirdPartyAPIUrl is hard coded. This should come from a config file which could potentially get updated at build time or even at runtime.

### Prerequisites
1. Install AdoptOpenJDK 11 - https://adoptopenjdk.net/

### Running dev server
1. **MacOS/Linux**: ./mvnw spring-boot:run
1. **Windows**: mvnw spring-boot:run

### Running unit tests
1. **MacOS/Linux**: ./mvnw test
1. **Windows**: mvnw test

### Invoking endpoints running locally
1. Install `humao.rest-client` for Visual Studio Code
1. Using Visual Studio Code, open `/fakeRequests/requests.http`
1. Click `Send Request` above the first request
1. Take the id from the response of the first request and put it into a file called `.env` in the `/fakeRequests` folder using this format: `ID={ID}`
1. Now you can click `Send Request` on any of the other requests and it will use the ID from the `.env` file