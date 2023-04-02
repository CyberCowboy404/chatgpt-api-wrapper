"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const index_1 = __importDefault(require("../routes/index"));
const helmet_1 = __importDefault(require("helmet"));
const compression_1 = __importDefault(require("compression"));
function attachMiddlewares(app, server) {
    const env = process.env.NODE_ENV || 'development';
    if (env === 'development') {
        app.use((0, helmet_1.default)());
        app.use((0, compression_1.default)());
        app.use((0, morgan_1.default)('dev'));
    }
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: false }));
    app.use((0, cookie_parser_1.default)());
    app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
    app.use('/', index_1.default);
}
exports.default = attachMiddlewares;
//# sourceMappingURL=index.js.map