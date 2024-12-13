
import { PORT } from './vars'

import { configDB } from './db'

import { Application } from 'express'



export const initServer = async (app: Application) => {
    
    const connected = await configDB()
    if (!connected) {
        process.exit(1)
    }

    try {
        console.log('Running the Server...')
        app.listen(PORT, () => {
            console.log(`Server is Runnig on PORT ${PORT}.`)
        })

    } catch (err) {
        console.log('Server failed to Run.')
        console.log(err)

    } 
}
