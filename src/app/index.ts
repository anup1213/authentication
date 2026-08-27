import express from 'express'
import type {Express} from 'express'
import {authRouter} from './auth/routes'

export function createApplication(): Express{
    const app = express()

    // middlewares
    app.use(express.json())
    app.use('/auth', authRouter)


    // routes
    app.get('/', (req, res) => {
        return res.json({message: 'Welcome to chaicode auth service'})
    })


    return app
}