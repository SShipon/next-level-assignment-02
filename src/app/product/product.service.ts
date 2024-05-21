import { TProduct } from './product.interface'
import { Product } from './product.model'

const createProduct = async (payLoad: TProduct) => {
  const result = await Product.create(payLoad)
  return result
}

const getAllProducts = async (searchTerm: unknown) => {
  if (typeof searchTerm === 'string') {
    const result = Product.find({ $text: { $search: searchTerm } })
    return result
  }
  const result = await Product.find()
  return result
}




export const productServices = {
  createProduct,
  getAllProducts,
 
}
