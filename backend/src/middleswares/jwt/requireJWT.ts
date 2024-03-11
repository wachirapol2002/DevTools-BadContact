import { RequestHandler } from 'express'
import jwt from 'jsonwebtoken'
import 'dotenv/config'

const requireJWT: RequestHandler = (req, res, next) => {
  const token = req.cookies.access_token
  if (!token) {
    return res.sendStatus(403)
  }
  try {
    const data = jwt.verify(token, process.env.JWT_SECRET!)
  } catch {
    return res.sendStatus(403)
  }
  next()
}

export default requireJWT
