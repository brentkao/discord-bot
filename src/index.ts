import { Client, GatewayIntentBits } from 'discord.js';
import mongoose from 'mongoose';
import { env } from './env.js';

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildScheduledEvents,
    GatewayIntentBits.MessageContent,
  ],
});

async function connectToMongo() {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(env.MONGO_URI);
    console.log('✅ Connected to MongoDB');
  } catch (error) {
    console.error('❌ MongoDB 連線失敗:', error);
    throw error; // 上層負責 exit
  }
}

async function loginDiscordBot() {
  try {
    await client.login(env.DISCORD_TOKEN);
    console.log(`🤖 Bot logged in as ${client.user?.tag}`);
  } catch (error) {
    console.error('❌ Discord Bot 登入失敗:', error);
    throw error; // 上層負責 exit
  }
}

async function bootstrap() {
  try {
    await connectToMongo();
    await loginDiscordBot();

    // 👉 之後可以接 eventHandler(client)、metrics.init()、jobQueue.init()
    // e.g., eventHandler(client);
  } catch (error) {
    console.error('🛑 系統初始化失敗，強制退出');
    process.exit(1);
  }
}

bootstrap();
