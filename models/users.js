import { Model, DataTypes } from 'sequelize';
import {sequelize} from './db.js'; // Import the Sequelize instance created earlier
import bcrypt from 'bcryptjs';
import Roles from './role.js';

class Users extends Model {}
Users.init({
  // Define the columns of the User table
  userId: {
    type: DataTypes.INTEGER,
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
    type: DataTypes.STRING,
    allowNull: false,
    set(value) {
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(value, salt);
      this.setDataValue('password', hashedPassword);
    }
  },
  roleId: {
    type: DataTypes.STRING,
    references: {
      model: Roles, // reference the Role model
      key: 'value' // reference the value column in the Role table
    }
  }
}, {
  sequelize, // Pass the Sequelize instance
  modelName: 'users', // Set the table name
  timestamps: false, // Set timestamps option to false
  underscored: false, // Set underscored option to false
});

Users.belongsTo(Roles, { foreignKey: 'roleId' });
Roles.hasMany(Users, { foreignKey: 'roleId' });

export default Users;