const migration = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("lessons", {
           //
           lessonId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
          },
          type: {
            type: Sequelize.STRING,
            allowNull: false,
            references: {
              model: "type",
              key: "value",
            },
          },
          courseId: {
            type: Sequelize.STRING,
            allowNull: false,
            references: {
              model: "course",
              key: "courseId",
            },
          },
          teacherId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: "teachers",
              key: "teacherId",
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
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("lessons");
  },
};

module.exports = migration;