import { Model, DataTypes } from "sequelize";
const sequelize = "sequelize";

class LessonTypes extends Model {}
LessonTypes.init(
  {
    type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "lessonTypes",
  }
);
