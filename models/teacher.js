import { Model, DataTypes } from "sequelize";
const sequelize = "sequelize";
import { Users } from "./user.js";
import { Lesson } from "./lesson.js";

class Teachers extends Users {}
Teachers.init(
  {
    teacher_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: Users,
        key: "user_id",
      },
    },
    lesson_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: Lesson,
        key: "lesson_id",
      },
    },
  },
  {
    sequelize,
    modelName: "teachers",
  }
);

Teachers.belongsTo(Users, { foreignKey: "teacher_id" });
Users.hasOne(Teachers, { foreignKey: "teacher_id" });
