
import { Model, Table, AutoIncrement, PrimaryKey, Column, AllowNull, NotEmpty, Unique, Default } from "sequelize-typescript";
import  {MembersModelInterface} from '../interface/db.interface'

@Table(
    {
    tableName: 'users',
    timestamps: true
}
) 

export default class User extends Model implements MembersModelInterface{

    @AutoIncrement
    @PrimaryKey
    @Column
    id?: number

    @AllowNull(false)
    @NotEmpty
    @Column
    full_name!: string
    
    @AllowNull(false)
    @Unique
    @NotEmpty
    @Column
    email!: string

    @AllowNull(false)
    @NotEmpty
    @Column
    whatsApp!: string
   
    @AllowNull(false)
    @NotEmpty
    @Column
    country!: string

    @AllowNull(false)
    @NotEmpty
    @Column
    residence!: string

    @AllowNull(false)
    @NotEmpty
    @Column
    occupation!: string
   
    @AllowNull(false)
    @NotEmpty
    @Column
    orgType!: string

    @AllowNull(false)
    @NotEmpty
    @Column
    education!: string
   
    @AllowNull(false)
    @NotEmpty
    @Column
    eduStatus!: string

    @AllowNull(false)
    @NotEmpty
    @Column
    areaOfInterest!: string

    @AllowNull(false)
    @NotEmpty
    @Column
    serostatus!: string

    @AllowNull(false)
    @NotEmpty
    @Column
    bloodGroup!: string

    @AllowNull(false)
    @NotEmpty
    @Column
    gender!: string
  
    @AllowNull(false)
    @NotEmpty
    @Column
    dob!: string

    @AllowNull(false)
    @NotEmpty
    @Column
    sexualOrientation!: string
  
    @AllowNull(false)
    @NotEmpty
    @Column
    vulnerableOption!: string
   
    @AllowNull(false)
    @NotEmpty
    @Column
    password!: string
   
    @AllowNull(true)
    @Default(false)
    @Column
    verify!: boolean
}