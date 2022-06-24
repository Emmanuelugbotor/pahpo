
import { Sequelize } from "sequelize-typescript";
import User from "../models/members.model";
require("dotenv").config();

export const sequelize = new Sequelize(`${process.env.DB_NAME}`, `${process.env.DB_USER}`, `${process.env.DB_PASSWORD}`, {
    host: process.env.DB_HOST,
    dialect: "mysql",
    // port: parseInt(`${process.env.DB_PORT}`),
    models: [__dirname + "./models/*"]
});
sequelize.addModels([User]);