module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "teachers",
      [
        {
          teacher_id: 200107073,
          lesson_ids: [1, 2],
        },
        {
          teacher_id: 200107114,
          lesson_ids: [3,4],
        }
      ], 
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("teachers", null, {});
  },
};
