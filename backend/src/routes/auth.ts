import { compareSync } from 'bcrypt'
import { Router } from 'express'
import { db } from '../clients/drizzle'
import { eq } from 'drizzle-orm'
import { users } from '../schema'
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

  const jwtString = jwt.sign(
    { userId: user.id, displayName: user.displayName },
    process.env.JWT_SECRET!
  )

  res.status(200).json({ message: 'login successful', jwt: jwtString })
})
