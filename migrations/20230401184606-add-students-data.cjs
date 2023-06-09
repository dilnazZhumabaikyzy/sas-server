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
          authorizedId: 200107114,
          major: "Two Foreign Languages",

        },
        {
          studentId: 200107115,
          authorizedId: 200107114,
          major: "Computer Science",
        },
        {
          studentId: 200107116,
          authorizedId: 200107114,
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
          studentId: 200107022,
          authorizedId: null,
          major: "Computer Science",
        },
        {
          studentId: 200107073,
          authorizedId: null,
          major: "Computer Science",
        },
        {
          studentId: 200107080,
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
