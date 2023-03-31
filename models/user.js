import { Model, DataTypes } from 'sequelize';
const sequelize = 'sequelize'; // Import the Sequelize instance created earlier

class Users extends Model {}
Users.init({
  // Define the columns of the User table
  user_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.ARRAY,
    allowNull: false,
  },
}, {
  sequelize, // Pass the Sequelize instance
  modelName: 'users', // Set the table name
});