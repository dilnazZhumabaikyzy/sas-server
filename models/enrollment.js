import { Model, DataTypes } from 'sequelize';
import {sequelize} from './db.js'; // Import the Sequelize instance created earlier
import Lessons from './lessons.js';
import Students from './student.js';

class Enrollment extends Model {}
Users.init({
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
  modelName: 'enrollment', // Set the table name
  timestamps: false, // Set timestamps option to false
  underscored: false,
});

Enrollment.belongsTo(Lessons, { foreignKey: "lessonId" });
Lessons.hasMany(Enrollment, { foreignKey: "lessonId" });

Enrollment.belongsTo(Students, { foreignKey: "studentId" });
Students.hasMany(Enrollment, { foreignKey: "studentId" });

export default Enrollment;