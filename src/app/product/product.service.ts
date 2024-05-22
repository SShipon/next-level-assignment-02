import { TProduct } from './product.interface'
import { Product } from './product.model'

// crate post add single product
const createProduct = async (payLoad: TProduct) => {
  const result = await Product.create(payLoad)
  return result
}

// get all product api
const getAllProducts = async (searchTerm: unknown) => {
  if (typeof searchTerm === 'string') {
    const result = Product.find({ $text: { $search: searchTerm } })
    return result
  }
  const result = await Product.find()
  return result
}

// crate single id details 
const getProductById = async (id: string) => {
  const result = await Product.findById(id)
  return result
}
// crate data updated 
const updateProduct = async (id: string, updatedProduct: TProduct) => {
  const result = await Product.findByIdAndUpdate(
    id,
    {
      $set: {
        ...updatedProduct,
      },
    },
    { new: true },
  )
  return result
}


// data deleted 
const deleteProduct = async (id: string) => {
  const result = await Product.findByIdAndDelete(id)
  return result
}

export const productServices = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
}
