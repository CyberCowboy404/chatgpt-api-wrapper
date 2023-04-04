import express, { Application } from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import v1Routes from '@routes/v1';
import helmet from 'helmet';
import compression from "compression";
import { Server } from 'http';
import cors from 'cors';

export default function attachMiddlewares(app: Application, server: Server) {
    const env = process.env.NODE_ENV || 'development';

    if (env === 'production') {
        app.use(helmet());
        app.use(compression());
        app.use(logger('dev'));
    }
    
    app.use(cors())
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));

    app.use('/api/v1', v1Routes);
}
