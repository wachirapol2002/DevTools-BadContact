import { compareSync } from 'bcrypt'
import { Router } from 'express'
import { db } from '../clients/drizzle.js'
import { eq } from 'drizzle-orm'
import { users } from '../schema.js'
import jwt from 'jsonwebtoken'
import 'dotenv/config'

const authRouter = Router()

authRouter.post('/login', async function login(req, res) {
  function reject() {
    res.status(401).json({ message: 'invalid email or password' })
  }

  const { email, password } = req.body
  const user = await db.query.users
    .findFirst({
      where: eq(users.email, email)
    })
    .execute()
  if (!user) {
    reject()
    return
  }
  const passwordMatch = compareSync(password, user.passwordHash)
  if (!passwordMatch) {
    reject()
    return
  }

  res.status(201).json({
    message: 'login successful',
    account: {
      id: user.id,
      email: user.email,
      displayName: user.displayName
    }
  })
})

export default authRouter
