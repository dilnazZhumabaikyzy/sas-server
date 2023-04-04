const migration = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("token", {
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: "users",
          key: "user_id",
        },
      },
      refreshToken:{
        type: Sequelize.STRING, 
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("token");
  },
};

module.exports = migration;
