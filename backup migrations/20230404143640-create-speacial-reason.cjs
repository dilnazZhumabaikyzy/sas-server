const migration = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("specialReason", {
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
      fromDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      toDate: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("specialReason");
  },
};

module.exports = migration;
