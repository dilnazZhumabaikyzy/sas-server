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
        key: "userId",
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
    timestamps: false, // Set timestamps option to false
    underscored: true,
  }
);

Students.belongsTo(Users, { foreignKey: "userId" });
Users.hasOne(Students, { foreignKey: "userId" });

export default Students