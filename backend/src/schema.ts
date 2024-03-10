import { serial, text, pgTable, timestamp } from 'drizzle-orm/pg-core'

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  displayName: text('display_name'),
  email: text('email').unique(),
  passwordHash: text('password_hash'),
  createdAt: timestamp('created_at').defaultNow().notNull()
})

export const contactReport = pgTable('contact_reports', {
  id: serial('id').primaryKey(),
  phoneNumber: text('phone_number').notNull(),
  targetName: text('target_name'),
  notes: text('notes'),
  reporter: serial('user_id').references(() => users.id), // Foreign key reference to users table
  createdAt: timestamp('created_at').defaultNow().notNull()
})
