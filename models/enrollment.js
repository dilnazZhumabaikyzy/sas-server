import { Model, DataTypes } from 'sequelize';
import {sequelize} from './db.js'; // Import the Sequelize instance created earlier
import Lessons from './lessons.js';
import Students from './student.js';

class Enrollments extends Model {}
Enrollments.init({
  // Define the columns of the User table
  enrollmentId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  studentId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    references: {
      model: Students,
      key: "studentId",
    },
  },
  lessonId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Lessons,
      key: "lessonId",
    },
  }


}, {
  sequelize, // Pass the Sequelize instance
  modelName: 'enrollments', // Set the table name
  timestamps: false, // Set timestamps option to false
  underscored: false,
});

Enrollments.belongsTo(Lessons, { foreignKey: "lessonId" });
Lessons.hasMany(Enrollments, { foreignKey: "lessonId" });

Enrollments.belongsTo(Students, { foreignKey: "studentId" });
Students.hasMany(Enrollments, { foreignKey: "studentId" });

export default Enrollments;