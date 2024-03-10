import 'dotenv/config'
import express from 'express'
import contactRouter from './routes/contact'

const app = express()

app.use(express.json())
app.use(contactRouter)

const port = process.env.PORT ? process.env.PORT : 3000

app.listen(port, () => {
  console.log('Server is running on port ' + port)
})
