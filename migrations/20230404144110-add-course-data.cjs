module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "courses",
      [
        {
          courseId: 'CSS 309',
          name: 'Low-level Architecture',
        },
        {
          courseId: 'INF 376',
          name: 'Natural Language Processing',
        },
        {
          courseId: 'CSS 342',
          name: 'Software Engineering',
        },
        {
          courseId: 'CSS 306',
          name: 'Cyber Security',
        },
        {
          courseId: 'INF 261',
          name: 'Game Physics',
        },
        {
          courseId: 'CSS 440',
          name: 'Distributed Computing',
        },
        {
          courseId: 'MDE 154',
          name: 'Psychology',
        },
        {
          courseId: 'MDE 153',
          name: 'Cultural Studies',
        },
        {
          courseId: 'INF 324',
          name: 'Computer Vision',
        },
        {
          courseId: 'CSS 345',
          name: 'Advanced computer architecture',
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("courses", null, {});
  },
};
