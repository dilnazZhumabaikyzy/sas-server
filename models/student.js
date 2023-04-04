import { Model, DataTypes } from "sequelize";
import {sequelize} from './db.js';
import Users from "./users.js";

class Students extends Model {}
Students.init(
  {
    student_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: Users,
        key: "user_id",
      },
    },
    authorized_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    major: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    modelName: "students",
  }
);

Students.belongsTo(Users, { foreignKey: "user_id" });
Users.hasOne(Students, { foreignKey: "user_id" });

export default Students