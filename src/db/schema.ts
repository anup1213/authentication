import { integer, pgTable, text, uuid ,varchar, boolean, timestamp } from "drizzle-orm/pg-core";



export const usersTable = pgTable('users', {
    id: uuid('id').primaryKey().defaultRandom(),
    firstName: varchar('first_name', {length: 45}).notNull(),
    lastName: varchar('last_name', {length: 45}),

    emailVerified: boolean('email_verified').default(false).notNull(),
    email: varchar('email', {length: 322}).notNull().unique(),

    password: varchar('password', {length: 66}),
    salt: text('salt'),
    
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').$onUpdate(() => new Date())
})