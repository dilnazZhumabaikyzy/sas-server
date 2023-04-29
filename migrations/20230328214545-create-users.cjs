const bcrypt = require('bcryptjs');

const migration = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      userId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING,
        set(value) {
          const salt = bcrypt.genSaltSync(10);
          const hashedPassword = bcrypt.hashSync(value, salt);
          this.setDataValue('password', hashedPassword);
        }
      },
      roleId: {
        type: Sequelize.STRING,
        // references: {
        //   model: 'roles', // reference the Role model
        //   key: 'value' // reference the value column in the Role table
        // }
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
module.exports = migration;
