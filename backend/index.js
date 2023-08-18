import express from 'express'
import cors from 'cors'
import { userRouter } from './src/Routes/userRouter.js'
import connectDb from './src/connectDb/connectdb.js'
import bodyParser from 'body-parser'
import fileRouter from './src/Routes/fileRouter.js'

const app2 = express()

const PORT =  3001
app2.use(cors())
app2.use(bodyParser.json());
app2.use(express.static('public'));

app2.use("/users", userRouter)
app2.use("/files", fileRouter)

connectDb();

app2.listen(PORT, error => {
  if(!error)console.log('Server running on port',PORT)
  else console.log(error)
})