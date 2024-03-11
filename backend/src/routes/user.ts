import { Router } from 'express'
import { db } from '../clients/drizzle.js'
import { users } from '../schema.js'
import { hashSync } from 'bcrypt'

const userRouter = Router()

userRouter.post('/', async function createUser(req, res) {
  const { displayName, email, password } = req.body
  const passwordHash = hashSync(password, 10)
  try {
    const contactReport = await db
      .insert(users)
      .values({
        email,
        displayName,
        passwordHash
      })
      .execute()
    res.status(201).json({
      email,
      displayName
    })
  } catch {
    res.status(400).json({
      message: 'this email is already in use'
    })
  }
})

export default userRouter
