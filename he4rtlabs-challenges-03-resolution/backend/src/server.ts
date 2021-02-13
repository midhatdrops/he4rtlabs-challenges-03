import express from 'express'
import * as dotenv from 'dotenv'
import path from 'path'
import bodyParser from 'body-parser'

//dotenv config
dotenv.config()
const PORT = process.env.PORT

const server = express()

server.use(bodyParser)

server.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`)
})
