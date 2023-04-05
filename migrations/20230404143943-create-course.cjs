const migration = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("course", {
           //
           courseId: {
            type: Sequelize.STRING,
            allowNull: false,
            primaryKey: true,
          },
          name: {
            type: Sequelize.STRING,
            allowNull: false,
          }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("course");
  },
};

module.exports = migration;
