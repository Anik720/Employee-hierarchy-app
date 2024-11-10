# Employee Hierarchy API


## Description

This project is an Employee Hierarchy API built with Express.js and MySQL. It allows users to:

* Fetch the hierarchical structure of employees based on their positions.
* Add new employees to the database by seeding.
* Authenticate using JWT.

## Features

This project is an Employee Hierarchy API built with Express.js and MySQL. It allows users to:

* JWT Authentication: Secure your endpoints with JWT tokens.
* Employee Hierarchy: Retrieve hierarchical data of employees.


## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL
- **ORM**: Sequelize
- **Authentication**: JWT (JSON Web Tokens).
- **Testing**: Jest, Supertest.
- **Logging**: Winston

## Installation


Make sure you have the following installed:

- **Node.js** (version 14 or higher)
- **PostgreSQL** 
- **Sequelize CLI** (for running migrations and seeds)

### Step-by-Step Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Anik720/Employee-hierarchy-app.git

2. **Install the dependencies**

npm install

3. **Set up environment variables: Create a .env file in the project root**

# env variables example
-  NODE_ENV=development
-  DB_USER=postgres
-  DB_PASSWORD=1234
-  DB_NAME=employee_hierarchy
-  DB_HOST=localhost
-  JWT_SECRET=your_secret

# Set up the database: Ensure postgres is running and execute the following to create the database and table:

- CREATE DATABASE employee_hierarchy;

# run migration command
- npm run migrate

# Seed the database: If you want to add some demo data to the database
- npm run seed


# Testing the API with Postman: Login and obtain JWT Token:

Method: POST
URL: http://localhost:3000/api/login
Body

{
  "username": "admin",
  "password": "12345"
}
Copy the accessToken from the response.
- Get all employess: Login and obtain JWT Token:
Method: GET
URL: http://localhost:3000/api/employees Header
Authorization: Bearer your_jwt_token

- Fetch employee hierarchy:
Method: GET
URL: http://localhost:3000/api/employees/1 Header

## Tests
The project includes automated tests to ensure functionality.

Unit Tests
Run unit tests with Jest:
npm run test

## How I Would Approach This Problem To solve the problem, I focused on:

- Separation of Concerns: Keeping the API logic and database interaction clean and modular by using Express and Sequelize.
- Database Schema: Designing the schema for employees and positions, with relationships for the hierarchical structure.
- Optimization: Query optimizations and caching techniques to handle large datasets.
- Scalability: Ensuring the API can handle concurrent requests by using proper indexing and avoiding heavy computations on each request.
- Testing: Writing unit and integration tests to validate the functionality of the API and ensure its reliability.