import { Model, DataTypes } from "sequelize";
const sequelize = "sequelize";
import { Users } from "./user.js";

class Students extends Users {}
Admins.init(
  {
    admin_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: Users,
        key: "user_id",
      },
    },
  },
  {
    sequelize,
    modelName: "admins",
  }
);

Admins.belongsTo(Users, { foreignKey: "admin_id" });
Users.hasOne(Admins, { foreignKey: "admin_id" });
