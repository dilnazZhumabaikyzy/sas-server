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
          student_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: "students",
              key: "student_id",
            },
          },
          entry_time: {
            type: Sequelize.DATE,
            allowNull: false,
          },
          exit_time: {
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
