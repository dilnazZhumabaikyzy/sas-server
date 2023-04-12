module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "teachers",
      [
        {
          teacherId: 200107111,
          lessonIds: [1, 2],
        },
        {
          teacherId: 200107112,
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
