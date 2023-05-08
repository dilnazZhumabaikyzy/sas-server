module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "lessons",
      [
        {
          lessonName: "Low-level Architecture",
          lessonType: 'Lecture',
          teacherId: 200107111,
          time: 'Monday 09:00',
          group: '02N',
          room: 'H302',
          courseId: 'CSS 309'
        },
        {
          lessonName: "Natural Language Processing",
          lessonType: 'Lecture',
          teacherId: 200107111,
          time: 'Monday 11:00',
          group: '02N',
          room: 'F202',
          courseId: 'INF 376'
        },
        {
          lessonName: "Software Engineering",
          lessonType: 'Lecture',
          teacherId: 200107112,
          time: 'Monday 12:00',
          group: '01N',
          room: 'E221',
          courseId: 'CSS 342'
        },
        {
          lessonName: "Cyber Security",
          lessonType: 'Practice',
          teacherId: 200107112,
          time: 'Monday 14:00',
          group: '02N',
          room: 'A102',
          courseId: 'CSS 306'
        },
        {
          lessonName: "Game Physics",
          lessonType: 'Practice',
          teacherId: 200107111,
          time: 'Monday 16:00',
          group: '01N',
          room: 'D214',
          courseId: 'INF 261'
        },
        {
          lessonName: "Software Engineering",
          lessonType: 'Lecture',
          teacherId: 200107112,
          time: 'Tuesday 12:00',
          group: '02N',
          room: 'D221',
          courseId: 'CSS 342'
        },
        {
          lessonName: "Distributed Computing",
          lessonType: 'Practice',
          teacherId: 200107111,
          time: "Tuesday 11:00",
          group: '01N',
          room: 'C102',
          courseId: 'CSS 440'
        },
        {
          lessonName: "Psychology",
          lessonType: 'Practice',
          teacherId: 200107111,
          time: "Tuesday 12:00",
          group: '15N',
          room: 'D201',
          courseId: 'MDE 154'
        },
        {
          lessonName: "Natural Language Processing",
          lessonType: 'Lecture',
          teacherId: 200107111,
          time: 'Tuesday 14:00',
          group: '01N',
          room: 'D202',
          courseId: 'INF 376'
        },
        {
          lessonName: "Advanced computer architecture",
          lessonType: 'Lecture',
          teacherId: 200107111,
          time: 'Tuesday 16:00',
          group: '01N',
          room: 'F102',
          courseId: 'CSS 345'
        },
        {
          lessonName: "Game Physics",
          lessonType: 'Practice',
          teacherId: 200107111,
          time: 'Wednesday 09:00',
          group: '02N',
          room: 'F201',
          courseId: 'INF 261'
        },
        {
          lessonName: "Cultural Studies",
          lessonType: 'Practice',
          teacherId: 200107111,
          time: 'Wednesday 11:00',
          group: '11N',
          room: 'C103',
          courseId: 'MDE 153'
        },
        {
          lessonName: "Advanced computer architecture",
          lessonType: 'Practice',
          teacherId: 200107111,
          time: 'Wednesday 13:00',
          group: '04N',
          room: 'F301',
          courseId: 'CSS 345'
        },
        {
          lessonName: "Psychology",
          lessonType: 'Practice',
          teacherId: 200107111,
          time: "Wednesday 14:00",
          group: '12N',
          room: 'D202',
          courseId: 'MDE 154'
        },
        {
          lessonName: "Computer Vision",
          lessonType: 'Lecture',
          teacherId: 200107111,
          time: 'Wednesday 16:00',
          group: '01N',
          room: 'F203',
          courseId: 'INF 324'
        },
        {
          lessonName: "Low-level Architecture",
          lessonType: 'Lecture',
          teacherId: 200107111,
          time: 'Thursday 10:00',
          group: '03N',
          room: 'H302',
          courseId: 'CSS 309'
        },
        {
          lessonName: "Distributed Computing",
          lessonType: 'Lecture',
          teacherId: 200107111,
          time: 'Thursday 12:00',
          group: '02N',
          room: 'D102',
          courseId: 'CSS 440'
        },
        {
          lessonName: "Advanced computer architecture",
          lessonType: 'Practice',
          teacherId: 200107111,
          time: 'Thursday 14:00',
          group: '03N',
          room: 'D302',
          courseId: 'CSS 345'
        },
        {
          lessonName: "Natural Language Processing",
          lessonType: 'Lecture',
          teacherId: 200107111,
          time: 'Thursday 16:00',
          group: '02N',
          room: 'D202',
          courseId: 'INF 376'
        },
        {
          lessonName: "Cultural Studies",
          lessonType: 'Practice',
          teacherId: 200107111,
          time: 'Thursday 17:00',
          group: '12N',
          room: 'C103',
          courseId: 'MDE 153'
        },
        {
          lessonName: "Distributed Computing",
          lessonType: 'Practice',
          teacherId: 200107111,
          time: "Friday 09:00",
          group: '02N',
          room: 'D102',
          courseId: 'CSS 440'
        },
        {
          lessonName: "Natural Language Processing",
          lessonType: 'Lecture',
          teacherId: 200107111,
          time: 'Friday 10:00',
          group: '01N',
          room: 'F202',
          courseId: 'INF 376'
        },
        {
          lessonName: "Cultural Studies",
          lessonType: 'Practice',
          teacherId: 200107111,
          time: 'Friday 11:00',
          group: '03N',
          room: 'F102',
          courseId: 'MDE 153'
        },
        {
          lessonName: "Software Engineering",
          lessonType: 'Lecture',
          teacherId: 200107112,
          time: 'Friday 12:00',
          group: '03N',
          room: 'E221',
          courseId: 'CSS 342'
        },
        {
          lessonName: "Low-level Architecture",
          lessonType: 'Lecture',
          teacherId: 200107111,
          time: 'Friday 16:00',
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
