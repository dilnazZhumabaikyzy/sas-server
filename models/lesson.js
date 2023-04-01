import { Model, DataTypes } from "sequelize";
const sequelize = "sequelize";

class Lessons extends Model {}
Lessons.init(
  {
    lesson_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: LessonTypes,
        key: "type_id",
      },
    },
    course_id: {
      type: DataTypes.INTEGER,
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
      type: DataTypes.DATE,
      allowNull: false,
    },
    count: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    group: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "lessons",
  }
);
