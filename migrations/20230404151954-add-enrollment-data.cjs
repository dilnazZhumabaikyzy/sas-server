module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "enrollment",
      [
        {
          student_id: '200107119',
          lesson_id:'1'
        },
        {
          student_id: '200107119',
          lesson_id:'2'
        },
        {
          student_id: '200107119',
          lesson_id:'4'
        },
        {
          student_id: '200107119',
          lesson_id:'6'
        }     
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("enrollment", null, {});
  },
};
