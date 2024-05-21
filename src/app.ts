import express, { Request, Response } from 'express'
import cors from 'cors'



const app = express()

// parsers
app.use(express.json())
app.use(cors())

// routers



 
//get routes server running check
app.get('/', (req: Request, res: Response) => {
  res.send('<h2 >Hello World!!!</h2>')
})

app.all('*', (req, res, next) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  })
  next()
})

export default app
















/* import { orderRouter } from './app/order/order.route'

  app.use('/api/orders', orderRouter)

*/