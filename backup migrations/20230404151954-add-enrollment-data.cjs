module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "enrollment",
      [
        {
          studentId: '200107119',
          lessonId:'1'
        },
        {
          studentId: '200107119',
          lessonId:'2'
        },
        {
          studentId: '200107119',
          lessonId:'4'
        },
        {
          studentId: '200107119',
          lessonId:'6'
        }     
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("enrollment", null, {});
  },
};
