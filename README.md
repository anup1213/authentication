# Authentication Service

![Authentication flow](./auth_flow.png)

A lightweight Express + TypeScript authentication service for user signup, signin, and authenticated profile retrieval.

## Overview

This project provides a simple auth API built with:
- Node.js
- Express
- TypeScript
- PostgreSQL
- Drizzle ORM
- JWT for stateless authentication
- Zod for request validation

It supports:
- User registration
- User login
- JWT token issuance
- Protected profile route using a Bearer token
- Password hashing with a per-user salt

## Project Structure

```text
authentication/
├── src/
│   ├── app/
│   │   ├── auth/
│   │   │   ├── middleware/
│   │   │   ├── controller.ts
│   │   │   ├── models.ts
│   │   │   ├── routes.ts
│   │   │   └── utils/
│   │   └── index.ts
│   ├── db/
│   │   ├── index.ts
│   │   └── schema.ts
│   └── index.ts
├── .env
├── docker-compose.yml
├── drizzle.config.js
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
└── README.md
```

## Prerequisites

Before starting the app, make sure you have:
- Node.js 18+
- pnpm
- Docker and Docker Compose

## Setup

1. Install dependencies:

```bash
pnpm install
```

2. Start the PostgreSQL database:

```bash
docker compose up -d
```

3. Ensure your environment variables are configured in `.env`:

```env
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/chaicode
```

4. Generate and run database migrations if needed:

```bash
pnpm run db:generate
pnpm run db:migrate
```

## Run the App

Start the development server:

```bash
pnpm run dev
```

The app runs on:

```text
http://localhost:5000
```

## API Endpoints

### 1) Sign up

```http
POST /auth/sign-up
Content-Type: application/json
```

Request body:

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "password": "secret123"
}
```

### 2) Sign in

```http
POST /auth/sign-in
Content-Type: application/json
```

Request body:

```json
{
  "email": "john@example.com",
  "password": "secret123"
}
```

Response:

```json
{
  "message": "Signin success",
  "data": {
    "token": "<jwt-token>"
  }
}
```

### 3) Get current user

```http
GET /auth/me
Authorization: Bearer <jwt-token>
```

Response:

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com"
}
```

## Notes

- Passwords are hashed with a generated salt before being stored.
- JWTs are validated on each protected request.
- Protected routes use the `Authorization` header in the `Bearer <token>` format.

## Available Scripts

```bash
pnpm run dev
pnpm run build
pnpm run studio
pnpm run db:generate
pnpm run db:migrate
```

## Database

The project uses PostgreSQL and Drizzle ORM. The user table is defined in `src/db/schema.ts` with fields such as:
- `id`
- `first_name`
- `last_name`
- `email`
- `password`
- `salt`
- `created_at`
- `updated_at`
