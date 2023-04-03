import { Model, DataTypes } from 'sequelize';
import sequelize from './db'; // Import the Sequelize instance created earlier
import bcrypt from 'bcryptjs';

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
    set(value) {
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(value, salt);
      this.setDataValue('password', hashedPassword);
    }
  },
  role: {
    type: DataTypes.STRING,
    references: {
      model: Role, // reference the Role model
      key: 'value' // reference the value column in the Role table
    }
  }
}, {
  sequelize, // Pass the Sequelize instance
  modelName: 'users', // Set the table name
});

Users.belongsTo(Role, { foreignKey: "role" });
Role.hasMany(Users, { foreignKey: "role" });

export default Users;