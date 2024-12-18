
import { OutputI } from '@Types/output'
import { Output } from '@db/output'
import { errorService, successService } from '@utils/service'
import { httpLogs } from '@Types/logs/httpLogs'
import { outputLogs } from './output.log'


export class OutputServices {
    static getOutput = async (userId: string, productId: string) => {
        try {
            
            const product = await Output.findOne({_id: productId, userId})
            if (!product) {
                return new errorService(
                    httpLogs.BadRequest.code,
                    [outputLogs.OUTPUT_NOT_FOUND.message],

                )
            }

            return new successService(
                httpLogs.OK.code,
                outputLogs.GET_OUTPUT_SUCCESS.message,
                product,

            )
        } catch (err) {
            return new errorService(
                httpLogs.InternalServerError.code,
                [outputLogs.OUTPUT_ERROR_GENERIC.message],
                (err as Error).message,

            )
        }
    }
    
    static getOutputs = async (userId: string, page: number, limit: number) => {
        try {
            
            const products = await Output.find({userId})
                .skip((page-1)*limit)
                .limit(limit)

            if (products.length===0) {
                return new errorService(
                    httpLogs.BadRequest.code,
                    [outputLogs.OUTPUT_NOT_FOUND.message],

                )
            }
            const totalItems = await Output.countDocuments()

            return new successService(
                httpLogs.OK.code,
                outputLogs.GET_OUTPUT_SUCCESS.message,
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
                [outputLogs.OUTPUT_ERROR_GENERIC.message],
                (err as Error).message,

            )
        }
    }

    static createOutput = async (userId: string, productData: OutputI) => {
        try {

            const product = await Output.create({...productData, userId})
            if (!product) {
                return new errorService(
                    httpLogs.BadRequest.code,
                    [outputLogs.OUTPUT_NOT_FOUND.message],

                )
            }

            return new successService(
                httpLogs.OK.code,
                outputLogs.CREATE_OUTPUT_SUCCESS.message,
                product,
                
            )
        } catch (err) {
            return new errorService(
                httpLogs.InternalServerError.code,
                [outputLogs.OUTPUT_ERROR_GENERIC.message],
                (err as Error).message,

            )
        }
    }
    

    static updateOutput = async (userId: string, productId: string, productData: Partial<OutputI>) => {
        try {

            let product = await Output.deleteOne({_id: userId, productId})

            if (!product) {
                return new errorService(
                    httpLogs.BadRequest.code,
                    [outputLogs.OUTPUT_NOT_FOUND.message],

                )
            }

            return new successService(
                httpLogs.OK.code,
                outputLogs.UPDATE_OUTPUT_SUCCESS.message,
                product,
                
            )
        } catch (err) {
            return new errorService(
                httpLogs.InternalServerError.code,
                [outputLogs.OUTPUT_ERROR_GENERIC.message],
                (err as Error).message,

            )
        }
    }
    
    static deleteOutput = async (userId: string, productId: string) => {
        try {

            let product = await Output.deleteOne({_id: userId, productId})
            
            if (!product) {
                return new errorService(
                    httpLogs.BadRequest.code,
                    [outputLogs.OUTPUT_NOT_FOUND.message],

                )
            }
            
            return new successService(
                httpLogs.OK.code,
                outputLogs.UPDATE_OUTPUT_SUCCESS.message,
                product
                
            )
        } catch (err) {
            return new errorService(
                httpLogs.InternalServerError.code,
                [outputLogs.OUTPUT_ERROR_GENERIC.message],
                (err as Error).message,

            )
        }
    }
}
