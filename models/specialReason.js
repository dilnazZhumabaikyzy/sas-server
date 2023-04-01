import { Model, DataTypes } from "sequelize";
const sequelize = "sequelize";

class SpecialReasons extends Model {}
SpecialReasons.init(
  {
    reason_id: {
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
    document: {
      type: DataTypes.BLOB,
      allowNull: false,
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    from_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    to_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "specialReasons",
  }
);
