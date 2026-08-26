import { defineConfig } from 'prisma/config';
import dotenv from 'dotenv';
dotenv.config();

const dbUser = process.env.DB_USER || 'root';
const dbPass = process.env.DB_PASSWORD ? encodeURIComponent(process.env.DB_PASSWORD) : 'your_password_here';
const dbHost = process.env.DB_HOST || 'localhost';
const dbPort = process.env.DB_PORT || '3306';
const dbName = process.env.DB_NAME || 'Lanka_luxe';
const dbUrl = `mysql://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`;
process.env.DATABASE_URL = dbUrl;

export default defineConfig({
  schema: 'prisma/schema.prisma',
  ...( { datasource: { url: dbUrl } } as any ),
});
