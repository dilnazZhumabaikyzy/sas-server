const migration = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("admins", {
      admin_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "user_id",
        },
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("admins");
  },
};
module.exports = migration;
