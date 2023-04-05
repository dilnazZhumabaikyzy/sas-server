import { Model, DataTypes } from "sequelize";
import {sequelize} from './db.js';

class Courses extends Model {}
Courses.init(
  {
    courseId: {
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
    timestamps: false, // Set timestamps option to false
    underscored: false,
  }
);
export default Courses;