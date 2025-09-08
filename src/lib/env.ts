import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    DATABASE_URL: z.url(),
  },
  client: {
    NEXT_PUBLIC_TRPC_API_URL: z.url(),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_TRPC_API_URL: process.env.NEXT_PUBLIC_TRPC_API_URL,
  },
});
