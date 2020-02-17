"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controller_1 = require("./controller");
var router = express_1.Router();
router.post('/', controller_1.authenticateUser);
exports.default = router;
