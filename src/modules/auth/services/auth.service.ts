
import { httpLogs } from "@logs/http"

import { User } from "@db/user"
import { errorService, successService } from "@utils/service"
import { authLogs } from "./auth.logs"
import { Sign } from '@utils/jwt'


export class authService {

    static SignIn = async (email: string, password: string) => {

        try{
            const user = await User.findOne({email})
    
            if (!user) {
                return new errorService(
                    httpLogs.BadRequest.code,
                    [authLogs.ERROR_INVALID_CREDENTIALS.message],
            )
            }
    
            if (!await user.passwordMatches(password)) {
                return new errorService(
                    httpLogs.BadRequest.code,
                    [authLogs.ERROR_INVALID_CREDENTIALS.message],
                )
            }
    
            const token = Sign({id: (user._id as string), email, role: user.role})
            
            return new successService (
                httpLogs.Accepted.code,
                authLogs.SUCCESS_LOGIN.message,
                {
                    user,
                    token
                },
            )

        } catch (err) {
            return new errorService (
                httpLogs.InternalServerError.code,
                [(err as Error).message],
                err,

            )
        }
    }


    static SignUp = async (name: string, lastname: string, birthday: Date, gender: string, email: string, password: string) => {

        try{
            const user = await User.create({name, lastname, birthday, gender, email, password})
    
            if (!user) {
                return new errorService (
                    httpLogs.BadRequest.code,
                    [authLogs.ERROR_LOGIN.message],
    
                )
            }
            const token = Sign({id: (user._id as string), email, role: user.role})
            
            return new successService (
                httpLogs.Created.code,
                authLogs.SUCCESS_LOGIN.message,
                {
                    user,
                    token
                },
            )

        } catch (err) {
            return new errorService (
                httpLogs.InternalServerError.code,
                [(err as Error).message],
                err,

            )
        }
    }
}
