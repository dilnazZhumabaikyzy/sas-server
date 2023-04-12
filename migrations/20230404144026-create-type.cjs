const migration = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("types", {
           //
           value: {
            type: Sequelize.STRING,
            primaryKey: true, // make value the primary key
          }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("types");
  },
};

module.exports = migration;
