"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var auth_service_1 = require("@modules/auth/services/auth.service");
var authenticateUser = function (req, res, next) {
    var _a = req.body, username = _a.username, password = _a.password;
    res.send(auth_service_1.authenticate(username, password));
};
exports.authenticateUser = authenticateUser;
