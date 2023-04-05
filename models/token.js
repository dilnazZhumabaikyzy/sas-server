import { Model, DataTypes } from "sequelize";
import {sequelize} from './db.js';
import Users from "./users.js";
class Token extends Model {}
Token.init(
  { 
    userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    references: {
      model: Users,
      key: "userId",
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
    timestamps: false, // Set timestamps option to false
    underscored: false, // Set underscored option to true
  }
);


export default Token;