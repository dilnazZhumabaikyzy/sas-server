import { Model, DataTypes } from "sequelize";
import {sequelize} from './db.js';
import Users from "./users.js";

class Students extends Model {}
Students.init(
  {
    studentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: Users,
        key: "userId",
      },
    },
    authorizedId: {
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
    underscored: false,
  }
);

Users.hasOne(Students, { foreignKey: 'studentId' });
Students.belongsTo(Users, { foreignKey: 'studentId' });

export default Students