"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Partners = void 0;
const sequelize_1 = require("sequelize");
const db = 'alldb';
const username = 'root';
const password = '';
class Partners extends sequelize_1.Model {
}
exports.Partners = Partners;
Partners.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    slug: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    description: {
        type: sequelize_1.DataTypes.TEXT
    },
    foodGroup: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    timestamps: true,
    sequelize: new sequelize_1.Sequelize(db, username, password, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306,
    }),
    paranoid: true,
    modelName: "Partners"
});
