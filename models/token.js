import { Model, DataTypes } from "sequelize";
import {sequelize} from './db.js';
import Users from "./users.js";
class Tokens extends Model {}
Tokens.init(
  { 
    userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    references: {
      model: Users,
      key: "userId",
    }
  },
   refreshToken:{
    type: DataTypes.STRING, 
    allowNull: false
    }
},
  {
    sequelize,
    modelName: "tokens",
    timestamps: false, // Set timestamps option to false
    underscored: false, // Set underscored option to true
  }
);

Users.belongsTo(Tokens, { foreignKey: 'userId' });
Tokens.hasMany(Users, { foreignKey: 'userId' });
export default Tokens;