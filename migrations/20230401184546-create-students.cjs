const migration = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("students", {
      studentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'users',
          key: 'userId'
        },
      },
      authorizedId: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      major: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("students");
  },
};

module.exports = migration;
