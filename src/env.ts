import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().min(1),
    CLERK_SECRET_KEY: z.string().min(1),
    BLOB_READ_WRITE_TOKEN: z.string().min(1),
    GEMINI_API_KEY: z.string().min(1),
    LEMON_SQUEEZY_API_KEY: z.string().min(1),
    LEMON_SQUEEZY_STORE_ID: z.string().min(1),
    // LEMON_SQUEEZY_WEBHOOK_SIGNATURE: z.string().min(1),
    LEMON_SQUEEZY_WEBHOOK_SECRET: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1),
    NEXT_PUBLIC_CLERK_SIGN_IN_URL: z.string().min(1),
    NEXT_PUBLIC_CLERK_SIGN_UP_URL: z.string().min(1),
    NEXT_PUBLIC_LEMON_SQUEEZY_VARIANT_ID_PRO_MONTHLY: z.string().min(1),
    NEXT_PUBLIC_LEMON_SQUEEZY_VARIANT_ID_PRO_PLUS_MONTHLY: z.string().min(1),
    NEXT_PUBLIC_BASE_URL: z.string().min(1).url(),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:
      process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    NEXT_PUBLIC_CLERK_SIGN_IN_URL: process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL,
    NEXT_PUBLIC_CLERK_SIGN_UP_URL: process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL,
    NEXT_PUBLIC_LEMON_SQUEEZY_VARIANT_ID_PRO_MONTHLY:
      process.env.NEXT_PUBLIC_LEMON_SQUEEZY_VARIANT_ID_PRO_MONTHLY,
    NEXT_PUBLIC_LEMON_SQUEEZY_VARIANT_ID_PRO_PLUS_MONTHLY:
      process.env.NEXT_PUBLIC_LEMON_SQUEEZY_VARIANT_ID_PRO_PLUS_MONTHLY,
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  },
});
