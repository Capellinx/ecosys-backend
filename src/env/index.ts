import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string().describe("Database URL"),
  PORT: z.coerce.number().default(3000).describe("Server port"),
  JWT_SECRET: z.string().describe("JWT secret"),
  JWT_REFRESH_SECRET: z.string().describe("JWT secret"),
  EMAIL_HOST: z.string().describe('Email host'),
  EMAIL_PORT: z.coerce.number().default(2525).describe('Email port'),
  EMAIL_USER: z.string().describe('Email user'),
  EMAIL_PASS: z.string().describe('Email password'),
  FRONT_URL_DEV: z.string().describe('Front url dev'),
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.error("❌ Invalid environment variables", _env.error.format());
  throw new Error("Invalid environment variables");
}

export const env = _env.data