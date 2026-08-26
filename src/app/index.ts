import express from 'express'
import type {Express} from 'express'


export function createApplication(): Express{
    const app = express()


    // routes
    app.get('/', (req, res) => {
        return res.json({message: 'Welcome to chaicode auth service'})
    })

    return app
}