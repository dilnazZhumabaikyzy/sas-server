const migration = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("lessons", {
      //

      lessonName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lessonId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      lessonType: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: "types",
          key: "value",
        },
      },
      courseId: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: "courses",
          key: "courseId",
        },
      },

      time: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      group: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      room: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      teacherId: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("lessons");
  },
};

module.exports = migration;
