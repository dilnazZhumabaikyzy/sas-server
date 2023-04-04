module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "students",
      [
        {
          student_id: 200107032,
          authorized_id: null,
          major: "Computer Science",
          
        },
        {
          student_id: 200107119,
          authorized_id: null,
          major: "Computer Science",
        },
        {
          student_id: 200107118,
          authorized_id: null,
          major: "Computer Science",
        
        },
        {
          student_id: 200107052,
          authorized_id: null,
          major: "Computer Science",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("students", null, {});
  },
};
