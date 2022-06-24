import * as Sequelize from 'sequelize'

export interface UserAddModel {
    email?: string
    password?: string
}

export interface UserModel extends Sequelize.Model<UserModel, UserAddModel>{
    id?: number
    first_name: string
    last_name: string
    email: string
    password: string
}

export interface MembersModelInterface{
    id?: number,
    verify: boolean,
    full_name: string,
    email: string,
    whatsApp: string,
    country: string,
    residence: string,
    occupation: string,
    orgType: string,
    education: string,
    eduStatus: string,
    areaOfInterest: string,
    serostatus: string,
    bloodGroup: string,
    gender: string,
    dob: string,
    sexualOrientation: string,
    vulnerableOption: string,
    password: string,
}

export interface IngredientAttributes {
    id: number;
    name: string;
    slug: string;
    description?: string;
    foodGroup?: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
  }