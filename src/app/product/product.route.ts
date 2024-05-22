import express from 'express'
import { productControllers } from './product.controller'
const router = express.Router()
// all router crate post get delete put 
router.post('/', productControllers.createProduct)
router.get('/', productControllers.getAllProducts)
router.get('/:productId', productControllers.getProductById)
router.delete('/:productId', productControllers.deleteProduct)
router.put('/:productId', productControllers.updateProduct)

export const productRouter = router
