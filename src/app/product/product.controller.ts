import { Request, Response } from 'express'
import { productServices } from './product.service'
import { productValidationSchema } from './product.validation'


// crate single product controller api 
const createProduct = async (req: Request, res: Response) => {
  try {
    const data = req.body
    const product = productValidationSchema.parse(data)

    const result = await productServices.createProduct(product)

    res.json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      data: err,
    })
  }
}
// crate all  products controller api section 
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query
    const result = await productServices.getAllProducts(searchTerm)
    res.json({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      data: err,
    })
  }
}
// crate single id  product controller api section 
const getProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params
    const result = await productServices.getProductById(productId)
    if (!result) {
      return res.status(400).json({
        success: false,
        message: 'Product not found',
        data: result,
      })
    }
    res.json({
      success: true,
      message: 'Product fetched successfully!',
      data: result,
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      data: err,
    })
  }
}

// crate all data update Product product controller api section 
const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params
    const data = req.body
    const updatedProduct = productValidationSchema.parse(data)
    const result = await productServices.updateProduct(
      productId,
      updatedProduct,
    )
    res.json({
      success: true,
      message: 'Product updated successfully!',
      data: result,
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      data: err,
    })
  }
}
// crate single product controller add
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params
    await productServices.deleteProduct(productId)
    res.json({
      success: true,
      message: 'Product deleted successfully!',
      data: null,
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      data: err,
    })
  }
}

export const productControllers = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
}
