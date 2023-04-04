import { Model, DataTypes } from "sequelize";
import {sequelize} from './db.js';

class Role extends Model {}
Role.init(
 
    {
    value: {
        type: DataTypes.STRING,
        primaryKey: true, // make value the primary key
      }
  },
  {
    sequelize,
    modelName: "role",
  }
);


export default Role;