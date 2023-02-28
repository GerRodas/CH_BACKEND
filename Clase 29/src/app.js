import express from "express";
import userRouter from "./routes/users.router.js"
import businessRouter from "./routes/business.router.js"
import ordersRouter from "./routes/orders.router.js"



const app = express()

app.use('/api/users', userRouter)
app.use('/api/orders', ordersRouter)
app.use('/api/business', businessRouter)

const PORT = process