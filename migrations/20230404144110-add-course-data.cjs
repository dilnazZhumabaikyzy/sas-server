module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "courses",
      [
        {
          courseId: 'CSS216',
          name: 'Mobile Development',
        },
        {
          courseId: 'MDE154',
          name: 'Science of Psychology',
        },
        {
          courseId: 'MDE153',
          name: 'Cultural Studies',
        },
        {
          courseId: 'CSS358',
          name: 'Design Patterns',
        },
        {
          courseId: 'CSS342',
          name: 'Software engineering',
        },
        {
          courseId: 'CSS440',
          name: 'Distributed Computing',
        },
        {
          courseId: 'INF376	',
          name: 'Natural Language Processing',
        },
        {
          courseId: 'CSS105',
          name: 'Fundamentals of Programming',
        },
        {
          courseId: 'INF106',
          name: 'Information and Communications Technologies',
        },
        {
          courseId: 'MAT151',
          name: 'Linear Algebra',
        },
        {
          courseId: 'MDE145',
          name: "Physical Education"
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("courses", null, {});
  },
};
