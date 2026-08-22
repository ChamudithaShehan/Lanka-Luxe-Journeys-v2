import { defineConfig } from 'prisma/config';

export default defineConfig({
  schema: 'prisma/schema.prisma',
  datasource: {
    url: process.env.DATABASE_URL ?? 'mysql://root:Hiru1999@@localhost:3306/Lanka_luxe',
  },
});
