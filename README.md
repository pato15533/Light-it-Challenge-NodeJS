# Challenge-NodeJS

## PROJECT

This project is a NodeJS application written in typescript.
Features:

- Docker for containerization.
- Includes user-entered data validation with Zod
- Implements email notifications with nodemailer
- MySQL database integration using TypeORM

## SETUP

You must create a .env file following the [.env.example](./.env.example).

For email notifications a mailtrap account is needed, you can create one **[here](https://mailtrap.io/register/signup?ref=header)**

## START APP

First, run `npm install`.

To build the application with docker, run the following:

`docker compose build`

To start the application:

`docker compose up`

Wait for the app to establish a connection to the database before testing. If the connection to the DB fails, the app will retry every 10 seconds.

## ENDPOINTS

There is currently only one endpoint:

`POST /api/patient`

Which accepts the following body:

```json
{
  "name": "",
  "email": "",
  "phone": "",
  "photoUrl": ""
}
```
