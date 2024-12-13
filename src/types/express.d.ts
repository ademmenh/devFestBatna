
import { UserD } from '@db/user'

declare global {
    namespace Express {
        export interface Request {
            user?: UserD,
        }
    }
}
