
import {Router} from 'express'
import { getProduct, getProducts, createProduct, updateProducts, deleteProduct } from './product.controller'
import { createProductValidator, updateProductValidator, getProductValidator, deleteProductValidator } from './product.validator'
import { isUser } from '@middlewares/auth'

export const Product = Router()

Product.route('/')
    .get(isUser, getProducts)
    .post(isUser, createProductValidator, createProduct)

Product.route('/:id')
    .get(isUser, getProductValidator, getProduct)
    .patch(isUser, updateProductValidator, updateProducts)
    .delete(isUser, deleteProductValidator, deleteProduct)
