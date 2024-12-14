DevFest Api
Project Overview:
This is the backend end for MyWkfl

Architecture:
The project organizes the services into modules inside the src direcotry:

config: Contains configuration files for the application: env, db, cors, vars, jwt.
db: defining schemas models, and some queries.
docs: swaggers config,
middleware: Contains middleware functions that intercept requests before they reach the route handlers, used for authentication, error handling
modules: contains each application service in it 
modules/controller: Contains Handler for validating incoming requests, processes them, and returns appropriate responses.
modules/services: Contains the Buisness logic of the application.
routes: Defines the routes for different API endpoints, mapping them to corresponding controller functions.
types: Contains TypeScript type definitions.
utils: Contains general purpose utility functions used across different parts of the application.

Documentation:
Scripts :
npm run build: "Transpile TypeScript files into JavaScript using TypeScript compiler.",
npm run dev: "Start development server with live reloading for TypeScript files.",
npm run start: "Start the production server.",
npm run test: "Run tests using Jest with environment setup and cache disabled.",

Getting Started:
https://github.com/ademmenh/devFestBatna
Navigate to the project directory: cd devFestBatna
Install dependencies: npm install
Set up environment variables, (use .env.example)
Start the backend server: npm start
