module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "lessons",
      [
      //total count: 7
      //Lectures
       {
        lessonType: 'Lecture',
        teacherId: 200107111,
        time:'Monday 12:00',
        group: '01N',
        room:'E101',
        courseId:'CSS216'
       },
       {
        lessonType: 'Lecture',
        teacherId: 200107111,
        time:'Monday 13:00',
        group: '01N',
        room:'E101',
        courseId:'CSS216'
       },
       {
        lessonType: 'Lecture',
        teacherId: 200107111,
        time:'Monday 14:00',
        group: '02N',
        room:'E102',
        courseId:'CSS216'
       },
       {
        lessonType: 'Lecture',
        teacherId:200107112,
        time:'Monday 16:00',
        group: '01N',
        room:'G217',
        courseId:'MDE154'
       },
       //Practices
       {
        lessonType: 'Practice',
        teacherId:200107112,
        time:'Monday 17:00',
        group: '03P',
        room:'G202',
        courseId:'MDE154'
       },
       {
        lessonType: 'Practice',
        teacherId:200107111,
        time:'Wednesday 12:00',
        group: '05P',
        room:'H101',
        courseId:'CSS216'
       }  ,
       {
        lessonType: 'Practice',
        teacherId:200107111,
        time:'Wednesday 13:00',
        group: '05P',
        room:'H101',
        courseId:'CSS216'
       }               
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("lessons", null, {});
  },
};
