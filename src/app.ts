import express, { Request, Response } from 'express'
import cors from 'cors'
import { productRouter } from './app/product/product.route'
import { orderRouter } from './app/order/order.route'

const app = express()

// parsers
app.use(express.json())
app.use(cors())

// products routers api crate 

app.use('/api/products', productRouter)

//order routers 
app.use('/api/orders', orderRouter)
 
//get routes server running check
app.get('/', (req: Request, res: Response) => {
  res.send('<h2 style="color:#6A0987 ;text-align:center; margin:15% auto; font-size:48px; font-weight: 900;">✔️Server Running TypeScript & MongoDB 🔥😃</h2>')
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