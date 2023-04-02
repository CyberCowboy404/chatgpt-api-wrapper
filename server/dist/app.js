"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const middlewares_1 = __importDefault(require("./middlewares"));
const server = http_1.default.createServer();
const app = (0, express_1.default)();
app.set('port', process.env.PORT || 3000);
(0, middlewares_1.default)(app, server);
server.on('request', app);
server.listen(app.get('port'), () => {
    console.log(`Server listening on port ${app.get('port')}`);
});
//# sourceMappingURL=app.js.map