const migration = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("teachers", {
      teacher_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: "users",
          key: "user_id",
        },
      },
      lesson_ids: {
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
