
interface successResponseI {
    status: string,
    message: string,
    data: unknown,

}

interface errorResponseI {
    status: string,
    errors: string[],
    
}
