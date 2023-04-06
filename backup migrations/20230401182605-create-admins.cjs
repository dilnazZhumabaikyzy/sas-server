const migration = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("admins", {
      adminId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "userId",
        },
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("admins");
  },
};
module.exports = migration;
