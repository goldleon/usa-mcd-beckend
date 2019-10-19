import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import { restRouter } from "../routes/";


export const setGlobalMiddleware = app => {
    app.use(express.urlencoded({
        extended: true
    }));

    app.use(express.json());
    if (process.env.NODE_ENV === "development") {
        app.use(morgan('dev'))
    }
    app.use(helmet());
    app.use(cors());

    app.use('/api/v1', restRouter)

    app.use((req, res, next) => {
        const error = new Error('NOT Found');
        error.message = 'Invalid Route';
        error.status = 404;
        next(error)
    })

    app.use(({ status, message }, req, res, next) => {
        res.status(status || 500);
        return res.json({
            error: {
                message: message
            }
        })
    })

}
