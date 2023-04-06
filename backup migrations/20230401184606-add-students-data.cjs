module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "students",
      [
        {
          studentId: 200107032,
          authorizedId: null,
          major: "Computer Science",
          
        },
        {
          studentId: 200107119,
          authorizedId: null,
          major: "Computer Science",
        },
        {
          studentId: 200107118,
          authorizedId: null,
          major: "Computer Science",
        
        },
        {
          studentId: 200107052,
          authorizedId: null,
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
