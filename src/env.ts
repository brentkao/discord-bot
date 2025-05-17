import 'dotenv/config';
import { z } from 'zod';

const environmentSchema = z.object({
  DISCORD_CLIENT_BOT_ID: z.string(),
  DISCORD_TOKEN: z.string(),
  DISCORD_PUBLIC_KEY: z.string(),
  DISCORD_GUILD_ID: z.string(),
  MONGO_URI: z.string(),
  PORT: z.preprocess((val) => {
    const parsed = parseInt(val as string, 10);
    return !isNaN(parsed) ? parsed : 3000;
  }, z.number()),
  GOOGLE_CALENDAR_ID: z.string(),
});

const environment = environmentSchema.safeParse(process.env);

if (!environment.success) {
  console.error('❌ Environment validation failed:');
  console.error(environment.error.format());
  process.exit(1);
}

export const env = environment.data;
export type Env = z.infer<typeof environmentSchema>;
