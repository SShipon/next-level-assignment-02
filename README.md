
# next-level-assignment-02


## Description

This project is a backend application built using Node.js, Express, and TypeScript.  It utilizes Mongoose for MongoDB interactions, CORS and  eslint for cross-origin resource sharing, and Zod for schema validation This README file will guide you on how to set up and run this application locally.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB (either local or remote instance)

## Installation

1. *Clone the repository:*
    
    git clone https://github.com/SShipon/next-level-assignment-02
    cd next-level-assignment-02
    

2. *Install dependencies:*
    
  - yarn add i
  - npm i
    

3. **Create a .env file in the root of your project:**
    
    touch .env
    
    Add the necessary environment variables to the .env file. For example:
    
env
    DB_URL=mongodb://localhost:27017/my-database
    PORT=5000
    

## Running the Application

### In Development Mode

To run the application in development mode with hot-reloading:

```bash
npm run start:dev