import express, { Request, Response } from 'express'
import cors from 'cors'
import { productRouter } from './app/product/product.route'


const app = express()

// parsers
app.use(express.json())
app.use(cors())

// routers

app.use('/api/products', productRouter)

 
//get routes server running check
app.get('/', (req: Request, res: Response) => {
  res.send('<h2 style="color:#6A0987 ;text-align:center; margin:20% auto; font-size:48px; font-weight: 900;">DO NAINO KE PECHIDA SAU GALIYARE INMEN KHO 😎😁 </ br> KAR TU MILTA HAI KAHA 🙂</br> server running typeScript & mongoDB 😁😄😃</h2>')
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