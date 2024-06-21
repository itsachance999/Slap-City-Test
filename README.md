### Assignment for Slap City, Senior Developer Candidate

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


**Objective:** Develop a secure authentication system for a Next.js application that integrates with Solana wallet adapter and Prisma with MySQL. The application should include basic functionality to log in, access protected content, and log out. Emphasis is on secure and efficient implementation.

### Requirements

1. **Project Setup**:

   - Use **Next.js** with the App Router.
   - Integrate **Solana Wallet Adapter** for authentication.
   - Use **Prisma** to connect to a **MySQL** database.

2. **Database Schema**:

   - Design a `User` table with appropriate fields to handle user information and authentication status.

3. **Application Pages**:

   - **Home Page** (`/`):

     - Include a "Login with Wallet" button.
     - Implement a secure authentication mechanism using the user's Solana wallet.
     - Upon successful login, redirect the user to the member area.

   - **Member Page** (`/member`):
     - Only accessible to authenticated users.
     - Display a simple counter that increments on button press using a `useEffect` hook.
     - Include a "Logout" button to securely end the user session and redirect back to the home page.

4. **Security Focus**:

   - Implement a secure login flow. Consider different security aspects such as:
     - Preventing unauthorized access.
     - Handling sensitive data securely.
     - Ensuring data integrity.
   - Avoid common security pitfalls in web development.

5. **Logout Functionality**:

   - Ensure that logging out securely invalidates the user's session.

6. **Best Practices**:

   - Use TypeScript to ensure code quality and reliability.
   - Include error handling and validation.

7. **Global State Management with Jotai**:
   - Use Jotai to store and manage the global state.

### Deliverables

1. **Source Code**:
   - A GitHub repository containing the complete project.
   - Include a `.env.example` file to specify necessary environment variables.

### Evaluation Criteria

- **Code Quality**: Clean, readable, and maintainable code.
- **Security**: Robust implementation of the authentication process with a focus on security.
- **Functionality**: Correct and complete implementation of login, logout, and protected routes.
- **Creativity**: Innovative and effective solutions to the given problem.
- **Problem-Solving**: Ability to handle challenges and implement a secure authentication flow independently.
