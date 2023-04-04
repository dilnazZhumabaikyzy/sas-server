import { Model, DataTypes } from "sequelize";
import {sequelize} from './db.js';
import Users from "./users.js";
import  Lessons  from "./lessons.js";

class Teachers extends Model {}
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
      type: DataTypes.ARRAY(Sequelize.INTEGER),
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
export default Teachers;