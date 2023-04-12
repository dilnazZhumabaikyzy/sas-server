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
          time: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          lessonId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: "students",
              key: "studentId",
            },
          }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("attendance");
  },
};

module.exports = migration;
