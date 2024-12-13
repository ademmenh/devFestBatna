
interface successServiceI {
    status: string,
    message: string,
    data: unknown,

}

interface errorServiceI {
    status: string,
    errors: string[],
    error?: unknown,
    
}
