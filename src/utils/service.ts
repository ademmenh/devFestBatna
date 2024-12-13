
export class successService implements successServiceI {
    status: string
    code: number
    message: string  
    data: unknown

    constructor(code: number, message: string, data: unknown) {
        this.status = 'success'
        this.code = code
        this.message = message
        this.data = data

    }
}

export class errorService implements errorServiceI {
    status: string
    code: number
    errors: string[]
    error?: unknown

    constructor(code: number, errors: string[], error?: unknown) {
        this.status = 'error'
        this.code = code
        this.errors = errors
        this.error = error

    }
}
