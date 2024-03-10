import { RequestHandler } from 'express'
import jwt from 'jsonwebtoken'

const requireJWT: RequestHandler = (req, res, next) => {
  const jwtString = req.headers.authorization
  if (!jwtString) {
    return res.status(401).json({ message: 'missing jwt' })
  }
  if (!jwt.verify(jwtString, process.env.JWT_SECRET!)) {
    return res.status(401).json({ message: 'invalid jwt' })
  }
  next()
}

export default requireJWT
