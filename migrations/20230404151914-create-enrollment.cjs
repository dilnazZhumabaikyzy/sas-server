const migration = {
  up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("enrollment", {
      enrollmetn_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      student_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: "students",
          key: "student_id",
        },
      },
      lesson_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "lessons",
          key: "lesson_id",
        }   
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("enrollment");
  },
};

module.exports = migration;
