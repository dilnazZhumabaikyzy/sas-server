const migration = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("specialReasons", {
      reasonId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      reasonType: {
        type: Sequelize.STRING,
        allowNull: false
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
        allowNull: true,
      },
      fileName: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("specialReasons");
  },
};

module.exports = migration;
