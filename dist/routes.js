"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var users_1 = require("./modules/users");
var auth_1 = require("./modules/auth");
var jwt_middleware_1 = __importDefault(require("./shared/middleware/jwt.middleware"));
var registerModulesRoutes = function (app) {
    app.use('/auth', auth_1.routes);
    app.use('/users', jwt_middleware_1.default, users_1.routes);
};
exports.default = registerModulesRoutes;
