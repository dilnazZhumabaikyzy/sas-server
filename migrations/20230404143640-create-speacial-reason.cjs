const migration = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("specialReasons", {
      reasonId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      studentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "students",
          key: "studentId",
        },
      },
      document: {
        type: Sequelize.BLOB,
        allowNull: false,
      },
      comment: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      from_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      to_date: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("specialReasons");
  },
};

module.exports = migration;
