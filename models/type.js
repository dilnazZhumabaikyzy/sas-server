import { Model, DataTypes } from "sequelize";
import {sequelize} from './db.js';

class Type extends Model {}
Type.init( 
    {
    value: {
        type: DataTypes.STRING,
        primaryKey: true, // make value the primary key
      }
  },
  {
    sequelize,
    modelName: "type",
  }
);


export default Type;