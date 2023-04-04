module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "students",
      [
        {
          student_id: 200107032,
          authorized_id: null,
          major: "Computer Science",
          lesson_ids: [5, 3, 17, 19, 21, 22, 25, 29, 31, 35, 36, 39, 20, 37],
        },
        {
          student_id: 200107119,
          authorized_id: null,
          major: "Computer Science",
          lesson_ids: [
            1, 2, 4, 5, 7, 8, 9, 11, 13, 14, 15, 28, 6, 19, 23, 35, 12, 24,
          ],
        },
        {
          student_id: 200107118,
          authorized_id: null,
          major: "Computer Science",
          lesson_ids: [10, 25, 12, 18, 26, 32, 27, 38, 25, 33],
        },
        {
          student_id: 200107052,
          authorized_id: null,
          major: "Computer Science",
          lesson_ids: [16, 37, 30, 34],
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("students", null, {});
  },
};
