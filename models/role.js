import { Model, DataTypes } from "sequelize";
import {sequelize} from './db.js';

class Roles extends Model {}
Roles.init(
 
    {
    value: {
        type: DataTypes.STRING,
        primaryKey: true, // make value the primary key
      }
  },
  {
    sequelize,
    modelName: "roles",
    timestamps: false, // Set timestamps option to false
    underscored: false,
  }
);


export default Roles;