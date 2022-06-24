
import { DataTypes, Model, Optional, Sequelize  } from 'sequelize'
import { IngredientAttributes } from 'interface/db.interface';
import { sequelize } from '../config/db.config'
const db = 'alldb';
const username = 'root';
const password = '';
export class Partners extends Model implements IngredientAttributes {
    public id!: number
    public name!: string
    public slug!: string
    public description!: string
    public foodGroup!: string
  
    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
  }
  
  Partners.init({
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    description: {
      type: DataTypes.TEXT
    },
    foodGroup: {
      type: DataTypes.STRING
    }
  },
   {
    timestamps: true,
    sequelize: new Sequelize(db, username, password,{
        host: 'localhost',
        dialect : 'mysql',
        port: 3306,
    }),
    paranoid: true,
    modelName: "Partners"
  },
  );

   