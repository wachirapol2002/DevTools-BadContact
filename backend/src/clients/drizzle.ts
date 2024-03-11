import 'dotenv/config'
import { drizzle } from 'drizzle-orm/node-postgres'
import { migrate } from 'drizzle-orm/node-postgres/migrator'
import * as schema from '../schema.js'
import pg from 'pg'
const { Client } = pg

const client = new Client({
  connectionString: process.env.DATABASE_URL!

})

await client.connect()
const db = drizzle(client, { schema })

await migrate(db, { migrationsFolder: 'drizzle' })

export { db }
