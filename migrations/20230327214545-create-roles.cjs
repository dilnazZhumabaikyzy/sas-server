const migration = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("roles", {
      value: {
        type: Sequelize.STRING,
        primaryKey: true, // make value the primary key
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("roles");
  },
};

module.exports = migration;
