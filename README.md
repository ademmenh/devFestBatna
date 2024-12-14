# Devfest Api

## Project Overview:
This is the backend end for MyWkfl

## Architecture:
The project organizes the services into modules inside the src direcotry:

1. **config**: Contains configuration files for the application: env, db, cors, vars, jwt.
2. **db**: defining schemas models, and some queries.
3. **docs**: swaggers config,
4. **middleware**: Contains middleware functions that intercept requests before they reach the route handlers, used for authentication, error handling
5. **modules**: contains each application service in it 
6. **modules/controller**: Contains Handler for validating incoming requests, processes them, and returns appropriate responses.
7. **modules/services**: Contains the Buisness logic of the application.
8. **routes**: Defines the routes for different API endpoints, mapping them to corresponding controller functions.
9. **types**: Contains TypeScript type definitions.
10. **utils**: Contains general purpose utility functions used across different parts of the application.

Documentation:
Scripts :
- `npm run build`: "Transpile TypeScript files into JavaScript using TypeScript compiler.",
- `npm run dev`: "Start development server with live reloading for TypeScript files.",
- `npm run doc`: "Start the production server.",
- `npm run test`:  "Run tests using Jest with environment setup and cache disabled.",

Getting Started:
1. clone: https://github.com/ademmenh/devFestBatna
2. Navigate to the project directory: cd devFestBatna
3. Install dependencies: npm install
4. Set up environment variables, (use .env.example)
5. Start the backend server: npm start
