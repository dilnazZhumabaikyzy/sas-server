const migration = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("lessons", {
           //
           lesson_id: {
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
          course_id: {
            type: Sequelize.STRING,
            allowNull: false,
            references: {
              model: "course",
              key: "course_id",
            },
          },
          teacher_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: "teachers",
              key: "teacher_id",
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
