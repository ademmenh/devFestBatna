
import { OutputI } from '@Types/output'
import { Output, OutputD } from '@db/output'
import { errorService, successService } from '@utils/service'
import { httpLogs } from '@Types/logs/httpLogs'
import { outputLogs } from './output.log'


export class OutputServices {
    static getOutput = async (userId: string, outputId: string) => {
        try {
            // TODO: if accessable
            const output = await Output.findOne({_id: outputId, userId})
            if (!outputId) {
                return new errorService(
                    httpLogs.BadRequest.code,
                    [outputLogs.OUTPUT_NOT_FOUND.message],

                )
            }

            return new successService(
                httpLogs.OK.code,
                outputLogs.GET_OUTPUT_SUCCESS.message,
                (output as OutputD).toUser(),

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
            // TODO: if accessable
            const outputs = await Output.find({userId})
                .skip((page-1)*limit)
                .limit(limit)

            if (outputs.length===0) {
                return new errorService(
                    httpLogs.BadRequest.code,
                    [outputLogs.OUTPUT_NOT_FOUND.message],

                )
            }
            const totalItems = await Output.countDocuments()

            const outputsRes = outputs.map((output) => {
                return output.toUser()
            })

            return new successService(
                httpLogs.OK.code,
                outputLogs.GET_OUTPUT_SUCCESS.message,
                {
                    outputsRes,
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

    static createOutput = async (userId: string, outputs: OutputI) => {
        try {

            const output = await Output.create({userId, outputs})
            if (!output) {
                return new errorService(
                    httpLogs.BadRequest.code,
                    [outputLogs.OUTPUT_NOT_FOUND.message],

                )
            }

            return new successService(
                httpLogs.OK.code,
                outputLogs.CREATE_OUTPUT_SUCCESS.message,
                output.toUser(),
                
            )
        } catch (err) {
            console.log(err)
            return new errorService(
                httpLogs.InternalServerError.code,
                [outputLogs.OUTPUT_ERROR_GENERIC.message],
                (err as Error).message,

            )
        }
    }

    static deleteOutput = async (userId: string, outputId: string) => {
        try {

            const output = await Output.findOneAndUpdate({userId, outputId}, {accessable: false})
            // TODO: increase the available storage by half of the deleted data.
            
            if (!output) {
                return new errorService(
                    httpLogs.BadRequest.code,
                    [outputLogs.OUTPUT_NOT_FOUND.message],

                )
            }

            return new successService(
                httpLogs.OK.code,
                outputLogs.DELETE_OUTPUT_SUCCESS.message,
                output.toUser(),
                
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
