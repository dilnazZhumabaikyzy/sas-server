import { Model, DataTypes } from "sequelize";
const sequelize = "sequelize";

class Courses extends Model {}
Courses.init(
  {
    course_id: {
      type: DataTypes.INTEGER,
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
