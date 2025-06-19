
# password-reset-flow

## Overview
This project is a password reset system that allows users to reset their passwords securely. It includes a frontend built with React and a backend built with Node.js and Express. The system uses JWT for authentication and MongoDB for data storage.
## Features
- User registration and login
- Password reset functionality
- Secure token generation and validation
- Responsive design
- User-friendly interface
- Email notification system
- Password hashing for security
- Validation of user input
- Error handling and feedback
- Environment variable management
- Tailwind CSS for styling
- JWT for secure authentication
- MongoDB for data storage
- Bcrypt for password hashing
- Responsive design using Tailwind CSS
- User-friendly interface with clear instructions

## Technologies Used
- React
- Node.js
- Express
- MongoDB
- JWT
- tailwindcss
- bcrypt

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Install dependencies:
   ```bash
   cd password-reset
   npm install
   ```  
3. Set up environment variables:
   Create a `.env` file in the root directory and add the following variables:
   ```
   PORT=your_port
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```
4. Start the server:
   ```bash
   npm start
   ```
5. Start the client:
   ```bash
   cd client
   npm install
   ```  
   ```bash
   npm start
   ```
## Usage
1. Register a new user by filling out the registration form.
2. Log in with your credentials.
3. If you forget your password, click on the "Forgot Password" link and follow the instructions to reset your password.
4. After resetting your password, you can log in with your new password.
