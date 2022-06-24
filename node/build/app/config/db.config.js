"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const members_model_1 = __importDefault(require("../models/members.model"));
require("dotenv").config();
exports.sequelize = new sequelize_typescript_1.Sequelize(`${process.env.DB_NAME}`, `${process.env.DB_USER}`, `${process.env.DB_PASSWORD}`, {
    host: process.env.DB_HOST,
    dialect: "mysql",
    // port: parseInt(`${process.env.DB_PORT}`),
    models: [__dirname + "./models/*"]
});
exports.sequelize.addModels([members_model_1.default]);
