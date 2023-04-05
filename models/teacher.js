import { Model, DataTypes } from "sequelize";
import {sequelize} from './db.js';
import Users from "./users.js";
import  Lessons  from "./lessons.js";

class Teachers extends Model {}
Teachers.init(
  {
    teacherId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: Users,
        key: "userId",
      },
    },
    lessonId: {
      type: DataTypes.ARRAY(Sequelize.INTEGER),
      allowNull: true,
      references: {
        model: Lessons,
        key: "lessonId",
      },
    },
  },
  {
    sequelize,
    modelName: "teachers",
    timestamps: false, // Set timestamps option to false
    underscored: false,
  }
);

Teachers.belongsTo(Users, { foreignKey: "teacherId" });
Users.hasOne(Teachers, { foreignKey: "teacherId" });
export default Teachers;