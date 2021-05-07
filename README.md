# code-weather-app

code-weather-app is a full stack weather application.
The application shows the current weather for 5 predefined cities and allows you to subscribe and access the weather for the 4 next days.

## Getting started

This repo contains both Front-End (/client) and Back-End (/server) of the application.

### Prerequisites

- Node
- Npm

BACK-END:

- MongoDb

FRONT-END:

- [Openweathermap](https://openweathermap.org/) account and API key

## Installation

1. Clone the repo and enter

```
git clone https://github.com/Do0oV/code-weather-app.git
cd code-weather-app
```

2. Install dependencies

FRONT-END:

```
cd client
npm install
```

Create a **.env** file - following the **.env.example**

BACK-END:

```
cd server
npm install
npm run db:setup
```

Create a **.env** file - following the **.env.example**

3. Start development server

FRONT-END:

```
cd client
npm start
```

BACK-END:

```
cd server
npm run dev
```

## Built with

- [Angular](https://angular.io/) - Front-End Framework
- [Koa](https://koajs.com/) - Back-End Framework
- [MongoDb](https://www.mongodb.com) - Database

## Author

Dorothee Viard - [Github](https://github.com/Do0oV)

## License

This project is licensed under the MIT License.
