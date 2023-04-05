import { Model, DataTypes } from "sequelize";
import {sequelize} from './db.js';
import Type from "./type.js";
import Course from "./course.js";
import Teachers from "./teacher.js";

class Lessons extends Model {}
Lessons.init(
  {
    lessonId: {
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
    courseId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: Course,
        key: "courseId",
      },
    },
    teacherId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Teachers,
        key: "teacherId",
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
    timestamps: false, // Set timestamps option to false
    underscored: false,
  }
);

Lessons.belongsTo(Type, { foreignKey: "type" });
Type.hasMany(Lessons, { foreignKey: "type" });

export default Lessons;