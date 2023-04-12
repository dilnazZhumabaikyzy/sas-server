module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "enrollment",
      [
        {
          studentId: '200107113',
          lessonId:'1'
        },
        {
          studentId: '200107113',
          lessonId:'2'
        },
        {
          studentId: '200107119',
          lessonId:'4'
        },
        {
          studentId: '200107119',
          lessonId:'6'
        },
        {
          studentId: '200107117',
          lessonId:'1'
        },     
        {
          studentId: '200107118',
          lessonId:'1'
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("enrollment", null, {});
  },
};
