module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "lessons",
      [
      //total count: 7
      //Lectures
       {
        type: 'Lecture',
        teacher_id: 200107073,
        time:'Monday 12:00',
        group: '01N',
        room:'E101',
        course_id:'CSS216'
       },
       {
        type: 'Lecture',
        teacher_id: 200107073,
        time:'Monday 13:00',
        group: '01N',
        room:'E101',
        course_id:'CSS216'
       },
       {
        type: 'Lecture',
        teacher_id: 200107114,
        time:'Monday 14:00',
        group: '02N',
        room:'E102',
        course_id:'CSS216'
       },
       {
        type: 'Lecture',
        teacher_id:200107114,
        time:'Monday 16:00',
        group: '01N',
        room:'G217',
        course_id:'MDE154'
       },
       //Practices
       {
        type: 'Practice',
        teacher_id:200107114,
        time:'Monday 17:00',
        group: '03P',
        room:'G202',
        course_id:'MDE154'
       },
       {
        type: 'Practice',
        teacher_id:200107073,
        time:'Wednesday 12:00',
        group: '05P',
        room:'H101',
        course_id:'CSS216'
       }  ,
       {
        type: 'Practice',
        teacher_id:200107073,
        time:'Wednesday 13:00',
        group: '05P',
        room:'H101',
        course_id:'CSS216'
       }               
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("lessons", null, {});
  },
};
