import { Model, DataTypes } from "sequelize";
import { sequelize } from './db.js';
import Students from "./student.js";

class SpecialReasons extends Model { }
SpecialReasons.init(
  {
    reasonId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    reasonType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    studentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Students,
        key: "studentId",
      },
    },
    document: {
      type: DataTypes.BLOB,
      allowNull: false,
    },
    fileName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    fromDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    toDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "specialReasons",
    timestamps: false, // Set timestamps option to false
    underscored: false,
  }
);
export default SpecialReasons;
