### 1. Pattern Project

Pattern project yang sering saya gunakan adalah "Modular Monolith" dengan struktur direktori yang rapi dan terorganisir. Pattern ini memungkinkan pengembangan yang terukur dan terstruktur, terutama untuk proyek-proyek dengan skala menengah hingga besar.

#### Struktur Direktori

Berikut adalah struktur direktori yang saya gunakan dalam proyek NestJS ini:

```
src/
  ├── auth/
  │   ├── auth.controller.ts
  │   ├── auth.module.ts
  │   ├── auth.service.ts
  │   ├── constants.ts
  │   ├── jwt.strategy.ts
  │   ├── local.strategy.ts
  │   ├── jwt-auth.guard.ts
  │   └── local-auth.guard.ts
  ├── users/
  │   ├── users.controller.ts
  │   ├── users.module.ts
  │   ├── users.service.ts
  │   ├── user.entity.ts
  ├── posts/
  │   ├── posts.controller.ts
  │   ├── posts.module.ts
  │   ├── posts.service.ts
  │   ├── post.entity.ts
  ├── app.module.ts
  ├── main.ts
test/
  ├── auth.e2e-spec.ts
  ├── app.e2e-spec.ts
  └── jest-e2e.json
```

### 2. Penjelasan Pattern di README GitHub

Berikut adalah penjelasan yang akan saya tambahkan ke dalam README proyek di GitHub:

---

# Rest API Challenge

This project is a simple REST API built with NestJS and TypeScript, implementing JWT-based authentication and basic CRUD operations for users and posts.

## Project Structure and Pattern

The project follows the **Modular Monolith** pattern, a widely-used architecture that balances simplicity and modularity, making it suitable for mid to large-scale applications.

### Why Modular Monolith?

1. **Separation of Concerns**: Each module (e.g., `auth`, `users`, `posts`) encapsulates its own business logic, controllers, and services. This separation enhances code maintainability and readability.

2. **Scalability**: Although it's a monolith, the modular design allows easy refactoring and scaling. New features or modules can be added without affecting existing ones.

3. **Reusability**: Code and logic within a module can be reused across the application. For instance, authentication logic is encapsulated within the `auth` module and can be easily reused in other parts of the application.

4. **Ease of Testing**: Modular design facilitates easier unit and end-to-end testing. Each module can be tested independently, ensuring that changes in one module do not inadvertently break others.

### Project Structure

- **auth/**: Contains authentication-related logic, including controllers, services, and strategies for JWT and local authentication.
- **users/**: Manages user-related operations and data access logic.
- **posts/**: Manages post-related operations and data access logic.
- **test/**: Contains end-to-end tests to ensure the integrity of the application.

### Installation

To run this project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/rest-api-challenge.git
   cd rest-api-challenge
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure the environment variables in `.env` file.

4. Run the application:

   ```bash
   npm run start
   ```

5. Run end-to-end tests:

   ```bash
   npm run test:e2e
   ```

### Dependencies

- **NestJS**: A progressive Node.js framework for building efficient and scalable server-side applications.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **TypeORM**: An ORM for TypeScript and JavaScript (ES7, ES6, ES5).
- **Passport**: Authentication middleware for Node.js.
- **JWT**: JSON Web Token for secure authentication.

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---