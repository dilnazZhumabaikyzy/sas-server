import { Model, DataTypes } from "sequelize";
import { sequelize } from './db.js';
import Types from "./type.js";
import Courses from "./course.js";

class Lessons extends Model { }
Lessons.init(
  {
    lessonName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lessonId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    lessonType: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: Types,
        key: "value",
      },
    },
    courseId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: Courses,
        key: "courseId",
      },
    },
    teacherId: {
      type: DataTypes.INTEGER,
      allowNull: false
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

Lessons.belongsTo(Types, { foreignKey: "lessonType" });
Types.hasMany(Lessons, { foreignKey: "lessonType" });

export default Lessons