import express, { Application } from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import indexRouter from '../routes/index';
import helmet from 'helmet';
import compression from "compression";
import { Server } from 'http';

export default function attachMiddlewares(app: Application, server: Server) {
    const env = process.env.NODE_ENV || 'development';

    if (env === 'development') {
        app.use(helmet());
        app.use(compression());
        app.use(logger('dev'));
    }

    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));

    app.use('/', indexRouter);
}