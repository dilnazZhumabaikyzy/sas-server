import { Model, DataTypes } from "sequelize";
import {sequelize} from './db.js';

class Types extends Model {}
Types.init( 
    {
    value: {
        type: DataTypes.STRING,
        primaryKey: true, // make value the primary key
      }
  },
  {
    sequelize,
    modelName: "types",
    timestamps: false, // Set timestamps option to false
    underscored: false,
  }
);


export default Types;