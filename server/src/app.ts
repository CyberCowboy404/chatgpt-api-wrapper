import http from 'http';
import express from 'express';

import attachMiddlewares from './middlewares';

const server = http.createServer();
const app = express();

app.set('port', process.env.PORT || 3000);

attachMiddlewares(app, server);

server.on('request', app);

server.listen(app.get('port'), () => {
    console.log(`Server listening on port ${app.get('port')}`);
});
