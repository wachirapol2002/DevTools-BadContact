import { Router } from 'express'
import { db } from '../clients/drizzle.js'
import { users } from '../schema.js'
import { hashSync } from 'bcrypt'

const userRouter = Router()

userRouter.post('/', async function createUser(req, res) {
  const { displayName, email, password } = req.body
  const passwordHash = hashSync(password, 10)
  const contactReport = await db
    .insert(users)
    .values({
      email,
      displayName,
      passwordHash
    })
    .execute()
  res.status(201).json(contactReport)
})

export default userRouter
