import { Model, DataTypes } from "sequelize";
import {sequelize} from './db.js';
import Users from "./users.js";
class Token extends Model {}
Token.init(
  { 
    user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    references: {
      model: Users,
      key: "user_id",
    },
    refreshToken:{
    type: DataTypes.STRING, 
    allowNull: false
    }
  }
},
  {
    sequelize,
    modelName: "token",
  }
);


export default Token;