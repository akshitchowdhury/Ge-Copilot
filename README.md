# Ge-Copilot

Ge-Copilot is a web application designed to assist users with various tasks using AI-powered tools. This repository contains both the frontend and backend components of the application.

## Backend

The backend of Ge-Copilot is responsible for handling user authentication, profile management, and miscellaneous operations.

### Backend Routes

#### Authentication Routes

1. **`/signup` [POST]**
   - Description: Allows users to sign up for the application.
   - Request Body: `email`, `pass`, `manual`, `pending`
   - Function: `signup({ email, pass, manual, pending })`

2. **`/login` [POST]**
   - Description: Allows users to log in to the application.
   - Request Body: `email`, `pass`, `manual`
   - Function: `login({ email, pass, manual })`

3. **`/forgotRequest` [POST]**
   - Description: Initiates the password reset process by sending a reset link to the user's email.
   - Request Body: `email`, `secret`
   - Function: `forgotRequest({ email }, secret)`

4. **`/resetPassword` [POST]**
   - Description: Resets the user's password using a secret token.
   - Request Body: `newPass`, `userId`, `secret`
   - Function: `resetPassword({ newPass, userId, secret })`

#### User Profile Routes

1. **`/finishSignup` [POST]**
   - Description: Completes the user signup process by storing additional user information.
   - Request Body: `fName`, `lName`, `_id`
   - Function: `finishSignup({ fName, lName, _id })`

2. **`/updateUserProfile` [POST]**
   - Description: Updates the user's profile information.
   - Request Body: `email`, `firstName`, `lastName`, `image`
   - Function: `updateUserProfile(email, firstName, lastName, image)`

#### Miscellaneous Routes

1. **`/checkPending` [POST]**
   - Description: Checks if a user has a pending signup process.
   - Request Body: `_id`
   - Function: `checkPending(_id)`

2. **`/checkForgot` [POST]**
   - Description: Checks if a user's password reset request is valid.
   - Request Body: `userId`, `secret`
   - Function: `checkForgot({ userId, secret })`

3. **`/checkUserFound` [POST]**
   - Description: Checks if a user exists based on the provided user ID.
   - Request Body: `_id`
   - Function: `checkUserFound({ _id })`

4. **`/deleteUser` [POST]**
   - Description: Deletes a user account.
   - Request Body: `userId`
   - Function: `deleteUser(userId)`

## Frontend

The frontend of Ge-Copilot is built using React and Tailwind CSS. It communicates with the backend to provide users with a seamless experience.

### Running the Project

To run the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd ge-copilot
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Access the application at `http://localhost:3000`.

### Toggle Dark Mode

The Ge-Copilot application features a dark mode option that users can toggle on or off. This feature is implemented using state management in React along with Tailwind CSS for styling.

To activate or disable dark mode, users can find a toggle button in the application's settings or preferences section.

---
