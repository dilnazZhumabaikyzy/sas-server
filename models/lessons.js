import { Model, DataTypes } from "sequelize";
import {sequelize} from './db.js';
import Type from "./type.js";
import Course from "./course.js";
import Teachers from "./teacher.js";

class Lessons extends Model {}
Lessons.init(
  {
    lesson_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: Type,
        key: "value",
      },
    },
    course_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: Course,
        key: "course_id",
      },
    },
    teacher_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Teachers,
        key: "teacher_id",
      },
    },
    time: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    group: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    room: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "lessons",
  }
);

Lessons.belongsTo(Type, { foreignKey: "type" });
Type.hasMany(Lessons, { foreignKey: "type" });

export default Lessons;