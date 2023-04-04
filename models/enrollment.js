import { Model, DataTypes } from 'sequelize';
import {sequelize} from './db.js'; // Import the Sequelize instance created earlier
import Lessons from './lessons.js';
import Students from './student.js';

class Enrollment extends Model {}
Users.init({
  // Define the columns of the User table
  enrollmetn_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  student_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    references: {
      model: Students,
      key: "student_id",
    },
  },
  lesson_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Lessons,
      key: "lesson_id",
    },
  }


}, {
  sequelize, // Pass the Sequelize instance
  modelName: 'enrollment', // Set the table name
  timestamps: false, // Set timestamps option to false
  underscored: true,
});

Enrollment.belongsTo(Lessons, { foreignKey: "lesson_id" });
Lessons.hasMany(Enrollment, { foreignKey: "lesson_id" });

Enrollment.belongsTo(Students, { foreignKey: "student_id" });
Students.hasMany(Enrollment, { foreignKey: "student_id" });

export default Enrollment;