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
    lessonIds: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: true
    },
  },
  {
    sequelize,
    modelName: "teachers",
    timestamps: false, // Set timestamps option to false
    underscored: false,
  }
);

Users.hasOne(Teachers, { foreignKey: 'teacherId' });
Teachers.belongsTo(Users, { foreignKey: 'teacherId' });

export default Teachers