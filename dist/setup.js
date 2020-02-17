"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var helmet_1 = __importDefault(require("helmet"));
var cors_1 = __importDefault(require("cors"));
var body_parser_1 = __importDefault(require("body-parser"));
var graphql_playground_middleware_express_1 = __importDefault(require("graphql-playground-middleware-express"));
var error_middleware_1 = __importDefault(require("./shared/middleware/error.middleware"));
var notfound_middleware_1 = __importDefault(require("./shared/middleware/notfound.middleware"));
var routes_1 = __importDefault(require("./routes"));
function setupCors(app) {
    app.use(cors_1.default());
    app.all('/', function (req, res, next) {
        res.header('Access-Control-Allow-Origin', process.env.ALLOWED_ORIGIN);
        res.header('Access-Control-Allow-Headers', 'X-Requested-With');
        next();
    });
}
function setupBodyParser(app) {
    app.use(body_parser_1.default.json());
    app.use(body_parser_1.default.urlencoded({ extended: true }));
}
function setupSecurity(app) {
    app.use(helmet_1.default());
    app.disable('x-powered-by');
}
function setupRoutes(app) {
    app.use('/ping', function (req, res) {
        res.status(200).end();
    });
    app.get('/playground', graphql_playground_middleware_express_1.default({ endpoint: '/graphql' }));
    routes_1.default(app);
}
function setupHandlers(app) {
    app.use(error_middleware_1.default);
    app.use(notfound_middleware_1.default);
}
function createApp() {
    var app = express_1.default();
    setupCors(app);
    setupBodyParser(app);
    setupSecurity(app);
    setupRoutes(app);
    setupHandlers(app);
    return app;
}
exports.default = createApp();
