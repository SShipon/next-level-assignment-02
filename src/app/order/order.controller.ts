import { Request, Response } from 'express'
import { orderServices } from './order.service'
import { orderValidationSchema } from './order.validation'

const createOrder = async (req: Request, res: Response) => {
  try {
    const data = req.body
    const order = orderValidationSchema.parse(data)
    const result = await orderServices.createOrder(order)
    res.json({
      success: true,
      message: 'Order created successfully!',
      data: result,
    })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    if (err.name === 'ZodError') {
      return res.status(500).json({
        success: false,
        message: err,
      })
    }
    res.status(500).json({
      success: false,
      message: err.message,
    })
  }
}


export const orderControllers = {
  createOrder,
 
}
