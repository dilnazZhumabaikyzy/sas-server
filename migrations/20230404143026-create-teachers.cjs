const migration = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("teachers", {
      teacherId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: "users",
          key: "userId",
        },
      },
      lessonIds: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("teachers");
  },
};

module.exports = migration;
