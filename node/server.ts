import express = require("express");
import { Request, Response } from "express";
import bodyParser = require("body-parser");
import { Routes } from "./app/routes/members/index";
import { sequelize } from "./app/config/db.config";
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
  public app: express.Application;
  public routePrv: Routes = new Routes();
  private PORT: number;

  constructor() {
    this.PORT = 8080;
    this.app = express();
    this.config();
    this.routePrv.route(this.app);
  }

  private config(): void {
    this.app.use(function (req: Request, res: Response, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With");
      res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, DELETE"
      );
      next();
    });
    this.app.use(fileupload({ createParentPath: true }));
    this.app.use(express.static(path.join(__dirname, "views")));
    this.app.set("view engine", "ejs");
    this.app.use(flash());
    this.app.use(
      session({
        secret: "tjbijbijband=sfdsfgsg",
        store: sessionStore,
        resave: false,
        saveUninitialized: false,
      })
    );
    this.app.use(passport.initialize());
    this.app.use(passport.session());
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    sequelize
      .authenticate()
      .then(async () => {
        console.log("Database connected successful");
        try {
          await sequelize.sync({ force: true });
        } catch (error: any) {
          console.log(error.message);
        }
      })
      .catch((err) => console.log("Error occured connecting to database", err));
    this.app.listen(this.PORT, () => {
      console.log(`RESTFUL API Running on port ${this.PORT}`);
    });
  }
}

export default new App().app;
