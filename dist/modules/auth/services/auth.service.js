"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var authenticate = function (username, password) {
    //todo: Authorization Rule
    return jsonwebtoken_1.default.sign({ id: 1, username: username }, process.env.JWT_SECRET);
};
exports.authenticate = authenticate;
