import { Model, DataTypes } from "sequelize";
import { sequelize } from './db.js';
import Users from "./users.js";

class Admins extends Model { }
Admins.init(
  {
    adminId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: Users,
        key: "userId",
      },
    },
  },
  {
    sequelize,
    modelName: "admins",
    timestamps: false, // Set timestamps option to false
    underscored: false,
  }
);

Admins.belongsTo(Users, { foreignKey: "userId" });
Users.hasOne(Admins, { foreignKey: "userId" });
export default Admins;