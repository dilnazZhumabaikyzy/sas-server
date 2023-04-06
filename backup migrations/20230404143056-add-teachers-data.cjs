module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "teachers",
      [
        {
          teacherId: 200107073,
          lessonIds: [1, 2],
        },
        {
          teacherId: 200107114,
          lessonIds: [3,4],
        }
      ], 
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("teachers", null, {});
  },
};
