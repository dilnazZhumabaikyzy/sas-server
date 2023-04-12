module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "students",
      [
        {
          studentId: 200107114,
          authorizedId: null,
          major: "Computer Science",
          
        },
        {
          studentId: 200107113,
          authorizedId: null,
          major: "Two Foreign Languages",
          
        },
        {
          studentId: 200107115,
          authorizedId: null,
          major: "Computer Science",
        },
        {
          studentId: 200107116,
          authorizedId: null,
          major: "Computer Science",
        
        },
        {
          studentId: 200107117,
          authorizedId: null,
          major: "Computer Science",
        },
        {
          studentId: 200107118,
          authorizedId: null,
          major: "Computer Science",
        },
        {
          studentId: 200107119,
          authorizedId: null,
          major: "Computer Science",
        },
        {
          studentId: 200107120,
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
