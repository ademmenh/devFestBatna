
import { Product } from '@/db/product'
import { errorService, successService } from '@/utils/service'
import { httpLogs } from '@/logs/http'
import { productLogs } from './product.log'
import { ProductI } from '@/types/product'


export class ProcutServices {
    static getProduct = async (userId: string, productId: string) => {
        try {
            
            const product = await Product.findById(productId)
            if (!product) {
                return new errorService(
                    httpLogs.BadRequest.code,
                    [productLogs.PRODUCT_NOT_FOUND.message],

                )
            }

            if (product.userId !== userId) {
                return new errorService(
                    httpLogs.Unauthorized.code,
                    [productLogs.GET_PRODUCT_FAILURE.message],

                )
            }

            return new successService(
                httpLogs.OK.code,
                productLogs.GET_PRODUCT_SUCCESS.message,
                product,

            )
        } catch (err) {
            return new errorService(
                httpLogs.InternalServerError.code,
                [productLogs.PRODUCT_ERROR_GENERIC.message],
                (err as Error).message,

            )
        }
    }
    
    static getProducts = async (userId: string, page: number, limit: number) => {
        try {
            
            const products = await Product.find({userId})
                .skip((page-1)*limit)
                .limit(limit)

            if (products.length===0) {
                return new errorService(
                    httpLogs.BadRequest.code,
                    [productLogs.PRODUCT_NOT_FOUND.message],

                )
            }
            const totalItems = await Product.countDocuments()

            return new successService(
                httpLogs.OK.code,
                productLogs.GET_PRODUCT_SUCCESS.message,
                {
                    products,
                    pagination: {
                        currentPage: page,
                        totalPages: Math.ceil(totalItems / limit),
                        totalItems,
                        limit,
                    },
                },
            )
        } catch (err) {
            return new errorService(
                httpLogs.InternalServerError.code,
                [productLogs.PRODUCT_ERROR_GENERIC.message],
                (err as Error).message,

            )
        }
    }

    static createProduct = async (userId: string, productData: ProductI) => {
        try {

            const product = await Product.create({...productData, userId})
            if (!product) {
                return new errorService(
                    httpLogs.BadRequest.code,
                    [productLogs.PRODUCT_NOT_FOUND.message],

                )
            }

            return new successService(
                httpLogs.OK.code,
                productLogs.CREATE_PRODUCT_SUCCESS.message,
                product,
                
            )
        } catch (err) {
            return new errorService(
                httpLogs.InternalServerError.code,
                [productLogs.PRODUCT_ERROR_GENERIC.message],
                (err as Error).message,

            )
        }
    }
    

    static updateProduct = async (userId: string, productId: string, productData: Partial<ProductI>) => {
        try {

            let product = await Product.findOne({productId})
            if (product?.userId !== userId) {
                return new errorService(
                    httpLogs.Unauthorized.code,
                    [productLogs.PRODUCT_NOT_FOUND.message],

                )
            }

            product = await Product.findByIdAndUpdate(productId, productData, {returnDocument: 'after'})
            if (!product) {
                return new errorService(
                    httpLogs.BadRequest.code,
                    [productLogs.PRODUCT_NOT_FOUND.message],

                )
            }

            return new successService(
                httpLogs.OK.code,
                productLogs.UPDATE_PRODUCT_SUCCESS.message,
                product,
                
            )
        } catch (err) {
            return new errorService(
                httpLogs.InternalServerError.code,
                [productLogs.PRODUCT_ERROR_GENERIC.message],
                (err as Error).message,

            )
        }
    }
    
    static deleteProduct = async (userId: string,productId: string) => {
        try {

            let product = await Product.findById(productId)
            
            if (product?.userId !== userId) {
                return new errorService(
                    httpLogs.BadRequest.code,
                    [productLogs.PRODUCT_NOT_FOUND.message],

                )
            }
            
            product = await Product.findByIdAndDelete(productId)

            if (!product) {
                return new errorService(
                    httpLogs.BadRequest.code,
                    [productLogs.PRODUCT_NOT_FOUND.message],

                )
            }

            return new successService(
                httpLogs.OK.code,
                productLogs.UPDATE_PRODUCT_SUCCESS.message,
                product
                
            )
        } catch (err) {
            return new errorService(
                httpLogs.InternalServerError.code,
                [productLogs.PRODUCT_ERROR_GENERIC.message],
                (err as Error).message,

            )
        }
    }
}