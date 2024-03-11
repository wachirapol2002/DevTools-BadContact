import 'dotenv/config'
import express from 'express'
import contactRouter from './routes/contact.js'
import userRouter from './routes/user.js'
import authRouter from './routes/auth.js'

const app = express()

app.use(express.json())
app.use('/contact', contactRouter)
app.use('/auth', authRouter)
app.use('/user', userRouter)

const port = process.env.PORT ? process.env.PORT : 8086

app.listen(port, () => {
  console.log('Server is running on port ' + port)
})
