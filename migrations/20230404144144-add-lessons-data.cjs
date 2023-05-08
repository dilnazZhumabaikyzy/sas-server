module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "lessons",
      [
        {
          lessonName: "Low-level Architecture",
          lessonType: 'Lecture',
          teacherId: 200107111,
          time: 'Mon 09:00',
          group: '02N',
          room: 'H302',
          courseId: 'CSS 309'
        },
        {
          lessonName: "Natural Language Processing",
          lessonType: 'Lecture',
          teacherId: 200107111,
          time: 'Mon 11:00',
          group: '02N',
          room: 'F202',
          courseId: 'INF 376'
        },
        {
          lessonName: "Software Engineering",
          lessonType: 'Lecture',
          teacherId: 200107112,
          time: 'Mon 12:00',
          group: '01N',
          room: 'E221',
          courseId: 'CSS 342'
        },
        {
          lessonName: "Cyber Security",
          lessonType: 'Practice',
          teacherId: 200107112,
          time: 'Mon 14:00',
          group: '02N',
          room: 'A102',
          courseId: 'CSS 306'
        },
        {
          lessonName: "Game Physics",
          lessonType: 'Practice',
          teacherId: 200107111,
          time: 'Mon 16:00',
          group: '01N',
          room: 'D214',
          courseId: 'INF 261'
        },
        {
          lessonName: "Software Engineering",
          lessonType: 'Lecture',
          teacherId: 200107112,
          time: 'Tue 12:00',
          group: '02N',
          room: 'D221',
          courseId: 'CSS 342'
        },
        {
          lessonName: "Distributed Computing",
          lessonType: 'Practice',
          teacherId: 200107111,
          time: "Tue 11:00",
          group: '01N',
          room: 'C102',
          courseId: 'CSS 440'
        },
        {
          lessonName: "Psychology",
          lessonType: 'Practice',
          teacherId: 200107111,
          time: "Tue 12:00",
          group: '15N',
          room: 'D201',
          courseId: 'MDE 154'
        },
        {
          lessonName: "Natural Language Processing",
          lessonType: 'Lecture',
          teacherId: 200107111,
          time: 'Tue 14:00',
          group: '01N',
          room: 'D202',
          courseId: 'INF 376'
        },
        {
          lessonName: "Advanced computer architecture",
          lessonType: 'Lecture',
          teacherId: 200107111,
          time: 'Tue 16:00',
          group: '01N',
          room: 'F102',
          courseId: 'CSS 345'
        },
        {
          lessonName: "Game Physics",
          lessonType: 'Practice',
          teacherId: 200107111,
          time: 'Wed 09:00',
          group: '02N',
          room: 'F201',
          courseId: 'INF 261'
        },
        {
          lessonName: "Cultural Studies",
          lessonType: 'Practice',
          teacherId: 200107111,
          time: 'Wed 11:00',
          group: '11N',
          room: 'C103',
          courseId: 'MDE 153'
        },
        {
          lessonName: "Advanced computer architecture",
          lessonType: 'Practice',
          teacherId: 200107111,
          time: 'Wed 13:00',
          group: '04N',
          room: 'F301',
          courseId: 'CSS 345'
        },
        {
          lessonName: "Psychology",
          lessonType: 'Practice',
          teacherId: 200107111,
          time: "Wed 14:00",
          group: '12N',
          room: 'D202',
          courseId: 'MDE 154'
        },
        {
          lessonName: "Computer Vision",
          lessonType: 'Lecture',
          teacherId: 200107111,
          time: 'Wed 16:00',
          group: '01N',
          room: 'F203',
          courseId: 'INF 324'
        },
        {
          lessonName: "Low-level Architecture",
          lessonType: 'Lecture',
          teacherId: 200107111,
          time: 'Thu 10:00',
          group: '03N',
          room: 'H302',
          courseId: 'CSS 309'
        },
        {
          lessonName: "Distributed Computing",
          lessonType: 'Lecture',
          teacherId: 200107111,
          time: 'Thu 12:00',
          group: '02N',
          room: 'D102',
          courseId: 'CSS 440'
        },
        {
          lessonName: "Advanced computer architecture",
          lessonType: 'Practice',
          teacherId: 200107111,
          time: 'Thu 14:00',
          group: '03N',
          room: 'D302',
          courseId: 'CSS 345'
        },
        {
          lessonName: "Natural Language Processing",
          lessonType: 'Lecture',
          teacherId: 200107111,
          time: 'Thu 16:00',
          group: '02N',
          room: 'D202',
          courseId: 'INF 376'
        },
        {
          lessonName: "Cultural Studies",
          lessonType: 'Practice',
          teacherId: 200107111,
          time: 'Thu 17:00',
          group: '12N',
          room: 'C103',
          courseId: 'MDE 153'
        },
        {
          lessonName: "Distributed Computing",
          lessonType: 'Practice',
          teacherId: 200107111,
          time: "Fri 09:00",
          group: '02N',
          room: 'D102',
          courseId: 'CSS 440'
        },
        {
          lessonName: "Natural Language Processing",
          lessonType: 'Lecture',
          teacherId: 200107111,
          time: 'Fri 10:00',
          group: '01N',
          room: 'F202',
          courseId: 'INF 376'
        },
        {
          lessonName: "Cultural Studies",
          lessonType: 'Practice',
          teacherId: 200107111,
          time: 'Fri 11:00',
          group: '03N',
          room: 'F102',
          courseId: 'MDE 153'
        },
        {
          lessonName: "Software Engineering",
          lessonType: 'Lecture',
          teacherId: 200107112,
          time: 'Fri 12:00',
          group: '03N',
          room: 'E221',
          courseId: 'CSS 342'
        },
        {
          lessonName: "Low-level Architecture",
          lessonType: 'Lecture',
          teacherId: 200107111,
          time: 'Fri 16:00',
          group: '01N',
          room: 'H303',
          courseId: 'CSS 309'
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("lessons", null, {});
  },
};
