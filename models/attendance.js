import { Model, DataTypes } from "sequelize";
import { sequelize } from './db.js';
import Students from "./student.js";
import Lessons from "./lessons.js";

class Attendances extends Model { }
Attendances.init(
  {
    attendanceId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    studentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Students,
        key: "studentId",
      },
    },
    entryTime: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    exitTime: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lessonId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // references: {
      //   model: Lessons,
      //   key: "lessonId",
      // },
    }

  },
  {
    sequelize,
    modelName: "attendances",
    timestamps: false, // Set timestamps option to false
    underscored: false,

  },


);
export default Attendances;
