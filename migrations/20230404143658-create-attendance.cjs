const migration = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("attendance", {
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
            type: Sequelize.DATE,
            allowNull: false,
          },
          exitTime: {
            type: Sequelize.DATE,
            allowNull: false,
          }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("attendance");
  },
};

module.exports = migration;
