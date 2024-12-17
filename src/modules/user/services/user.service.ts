
import { User } from '@db/user'
import { errorService, successService } from '@utils/service'
import { httpLogs } from '@Types/logs/httpLogs'
import { userLogs } from './user.logs'


export class UserServices {

    static getUsers = async (page: number, limit: number) => {
        try {
            
            const users = await User.find()
                .skip((page-1)*limit)
                .limit(limit)

            if (users.length === 0) {
                return new errorService(
                    httpLogs.BadRequest.code,
                    [userLogs.USERS_NOT_FOUND.message],

                )
            }

            const responseUsers = users.map((user) => {
                user.toResponse()
            })

            return new successService(
                httpLogs.OK.code,
                userLogs.GET_USERS_SUCCESS.message,
                responseUsers,

            )
        } catch (err) {
            return new errorService(
                httpLogs.InternalServerError.code,
                [userLogs.USER_ERROR_GENERIC.message],
                (err as Error).message,

            )
        }
    }

    static getUser = async (userId: string) => {
        try {
            
            const user = await User.findById(userId)
            if (!user) {
                return new errorService(
                    httpLogs.BadRequest.code,
                    [userLogs.USER_NOT_FOUND.message],

                )
            }

            return new successService(
                httpLogs.OK.code,
                userLogs.GET_USER_SUCCESS.message,
                user.toResponse(),

            )
        } catch (err) {
            return new errorService(
                httpLogs.InternalServerError.code,
                [userLogs.USER_ERROR_GENERIC.message],
                (err as Error).message,

            )
        }
    }

    static banUser = async (userId: string) => {
        try {
            const user = await User.findByIdAndUpdate(userId, {banned: true}, {returnDocument: 'after'})

            if (!user) {
                return new errorService(
                    httpLogs.BadRequest.code,
                    [userLogs.USER_NOT_FOUND.message],
                )
            }

            return new successService(
                httpLogs.OK.code,
                userLogs.BAN_USER_SUCCESS.message,
                user.toResponse(),
                
            )
        } catch (err) {
            return new errorService(
                httpLogs.InternalServerError.code,
                [userLogs.USER_ERROR_GENERIC.message],
                (err as Error).message,

            )
        }
    }

    static updateUser = async (userId: string, userData: Partial<UserI>) => {
        try {
            const user = await User.findByIdAndUpdate(userId, userData, {returnDocument: 'after'})
            if (!user) {
                return new errorService(
                    httpLogs.BadRequest.code,
                    [userLogs.USER_NOT_FOUND.message],

                )
            }

            return new successService(
                httpLogs.OK.code,
                userLogs.UPDATE_USER_SUCCESS.message,
                user.toResponse(),
                
            )
        } catch (err) {
            return new errorService(
                httpLogs.InternalServerError.code,
                [userLogs.USER_ERROR_GENERIC.message],
                (err as Error).message,

            )
        }
    }

    static deleteUser = async (userId: string) => {
        try {
            const user = await User.findByIdAndUpdate(userId, {deleted: true}, {returnDocument: 'after'});
            console.log(user)
            
            if (!user) {
                return new errorService(
                    httpLogs.BadRequest.code,
                    [userLogs.USER_NOT_FOUND.message],

                )
            }

            return new successService(
                httpLogs.OK.code,
                userLogs.UPDATE_USER_SUCCESS.message,
                { id: user._id },

            )
        } catch (err) {
            return new errorService(
                httpLogs.InternalServerError.code,
                [userLogs.USER_ERROR_GENERIC.message],
                (err as Error).message,

            )
        }
    }
}
