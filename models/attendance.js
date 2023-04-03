import { Model, DataTypes } from "sequelize";
import sequelize from './db';

class Attendances extends Model {}
Attendances.init(
  {
    attendance_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    student_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Students,
        key: "student_id",
      },
    },
    entry_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    exit_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "attendances",
  }
);
