const migration = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("type", {
           //
           value: {
            type: Sequelize.STRING,
            primaryKey: true, // make value the primary key
          }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("type");
  },
};

module.exports = migration;
