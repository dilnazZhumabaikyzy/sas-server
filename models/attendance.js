import { Model, DataTypes } from "sequelize";
import {sequelize} from './db.js';
import Students from "./student.js";

class Attendances extends Model {}
Attendances.init(
  {
    attendance_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    student_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Students,
        key: "student_id",
      },
    },
    entry_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    exit_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "attendances",
  }
);
export default Attendances;
