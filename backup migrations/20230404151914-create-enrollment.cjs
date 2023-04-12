const migration = {
  up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("enrollments", {
      enrollmentId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      studentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: "students",
          key: "studentId",
        },
      },
      lessonId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "lessons",
          key: "lessonId",
        }   
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("enrollments");
  },
};

module.exports = migration;
