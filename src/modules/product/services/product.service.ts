
import { Product } from '@/db/product'
import { errorService, successService } from '@/utils/service'
import { httpLogs } from '@/logs/http'
import { productLogs } from './product.logs'
import { ProductI } from '@/types/product'


export class ProcutServices {
    static getProduct = async (userId: string) => {
        try {
            
            const product = await Product.findById(userId)
            if (!product) {
                return new errorService(
                    httpLogs.BadRequest.code,
                    [productLogs.PRODUCT_NOT_FOUND.message],

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
    
    static getProducts = async (page: number, limit: number) => {
        try {
            
            const products = await Product.find().skip((page-1)*limit).limit(limit)
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

    static createProduct = async (productData: ProductI) => {
        try {
            const product = await Product.create( productData)
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
    

    static updateProduct = async (productId: string, productData: Partial<ProductI>) => {
        try {
            const product = await Product.findByIdAndUpdate(productId, productData, {returnDocument: 'after'})
            if (!product) {
                return new errorService(
                    httpLogs.BadRequest.code,
                    [productLogs.PRODUCT_NOT_FOUND.message],

                )
            }

            return new successService(
                httpLogs.OK.code,
                productLogs.PRODUCT_UPDATE_SUCCESS.message,
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
    
    static deleteProduct = async (productId: string) => {
        try {
            const product = await Product.findByIdAndDelete(productId);

            if (!product) {
                return new errorService(
                    httpLogs.BadRequest.code,
                    [productLogs.PRODUCT_NOT_FOUND.message],

                )
            }

            return new successService(
                httpLogs.OK.code,
                productLogs.PRODUCT_UPDATE_SUCCESS.message,
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