import express from 'express'
import cors from 'cors'
import { userRouter } from './src/Routes/userRouter.js'
import connectDb from './src/connectDb/connectdb.js'

const app2 = express()

const PORT =  3001
app2.use(cors())

app2.use("/users", userRouter)

connectDb();


app2.get('/route', (req, res) =>{
  res.status(200)
  res.send({message:"Hello, World!"})
})

app2.listen(PORT, error => {
  if(!error)console.log('Server running on port',PORT)
  else console.log(error)
})