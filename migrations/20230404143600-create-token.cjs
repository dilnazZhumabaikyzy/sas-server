const migration = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("tokens", {
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'users',
          key: 'userId',
        },
      },
      refreshToken:{
        type: Sequelize.STRING, 
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("tokens");
  },
};

module.exports = migration;
