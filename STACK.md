## [T3 Stack](https://github.com/t3-oss/create-t3-app)

tRPC with Next.js, TypeScript & Prisma

## Purpose:

Provide type-safe APIs E2E

## Request Path:

1. UI -> When a request is made from the UI, the request is sent to
2. Server end point (../api/[trpc].tsx) -> then the request is approved and
3. Context -> build out context, then its going to hit
4. Server (App Router) -> then the request is sent back to the user

## Technologies used

- tRPC
- TypeScript
- Prisma (MongoDB)
- Zod - Schema validation & type generation
