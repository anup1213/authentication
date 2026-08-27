import 'dotenv/config';
import { drizzle, type NodePgDatabase } from 'drizzle-orm/node-postgres';

export const db: NodePgDatabase = drizzle(process.env.DATABASE_URL!);