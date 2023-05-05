const migration = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("attendances", {
      //
      attendanceId: {
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
      entryTime: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      exitTime: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      lessonId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        // references: {
        //   model: "students",
        //   key: "studentId",
        // },
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("attendances");
  },
};

module.exports = migration;
