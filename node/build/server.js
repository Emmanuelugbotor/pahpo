"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const index_1 = require("./app/routes/members/index");
const db_config_1 = require("./app/config/db.config");
const cors = require("cors");
require("dotenv").config();
const path = require("path");
const flash = require("connect-flash");
const session = require("express-session");
const passport = require("passport");
const MySQLStore = require("express-mysql-session")(session);
const options = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
};
const sessionStore = new MySQLStore(options);
const fileupload = require("express-fileupload");
class App {
    constructor() {
        this.routePrv = new index_1.Routes();
        this.PORT = 8080;
        this.app = express();
        this.config();
        this.routePrv.route(this.app);
    }
    config() {
        this.app.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With");
            res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
            next();
        });
        this.app.use(fileupload({ createParentPath: true }));
        this.app.use(express.static(path.join(__dirname, "views")));
        this.app.set("view engine", "ejs");
        this.app.use(flash());
        this.app.use(session({
            secret: "tjbijbijband=sfdsfgsg",
            store: sessionStore,
            resave: false,
            saveUninitialized: false,
        }));
        this.app.use(passport.initialize());
        this.app.use(passport.session());
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        db_config_1.sequelize
            .authenticate()
            .then(() => __awaiter(this, void 0, void 0, function* () {
            console.log("Database connected successful");
            try {
                yield db_config_1.sequelize.sync({ force: true });
            }
            catch (error) {
                console.log(error.message);
            }
        }))
            .catch((err) => console.log("Error occured connecting to database", err));
        this.app.listen(this.PORT, () => {
            console.log(`RESTFUL API Running on port ${this.PORT}`);
        });
    }
}
exports.default = new App().app;
