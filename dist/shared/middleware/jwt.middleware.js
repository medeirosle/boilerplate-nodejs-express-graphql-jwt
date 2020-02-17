"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fp_1 = require("lodash/fp");
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var http_status_codes_1 = __importDefault(require("http-status-codes"));
var authGuard = function (req, res, next) {
    try {
        var token = req.headers.authorization;
        if (!token) {
            res.statusCode = http_status_codes_1.default.UNAUTHORIZED;
            return next();
        }
        var jwtPayload = verifyToken(token);
        req.user = jwtPayload;
        return next();
    }
    catch (error) {
        res.statusCode = http_status_codes_1.default.UNAUTHORIZED;
        res.send(error);
        return next();
    }
};
function verifyToken(token) {
    var pureToken = fp_1.pipe(fp_1.split(' '), fp_1.last)(token);
    return jsonwebtoken_1.default.verify(pureToken, process.env.JWT_SECRET);
}
exports.default = authGuard;
