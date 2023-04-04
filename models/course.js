import { Model, DataTypes } from "sequelize";
import {sequelize} from './db.js';

class Courses extends Model {}
Courses.init(
  {
    course_id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "courses",
  }
);
export default Courses;