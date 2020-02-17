"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
require('dotenv').config();
var setup_1 = __importDefault(require("./setup"));
var server = require('http').createServer(setup_1.default);
server
    .listen(process.env.PORT, function () {
    console.info("Server started on port " + process.env.PORT);
})
    .on('error', function (err) {
    console.error(err);
});
