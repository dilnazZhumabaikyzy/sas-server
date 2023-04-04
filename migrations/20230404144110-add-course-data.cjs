module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "course",
      [
        {
          course_id: 'CSS216',
          name: 'Mobile Development',
        },
        {
          course_id: 'MDE154',
          name: 'Science of Psychology',
        },
        {
          course_id: 'MDE153',
          name: 'Cultural Studies',
        },
        {
          course_id: 'CSS358',
          name: 'Design Patterns',
        },
        {
          course_id: 'CSS342',
          name: 'Software engineering',
        },
        {
          course_id: 'CSS440',
          name: 'Distributed Computing',
        },
        {
          course_id: 'INF376	',
          name: 'Natural Language Processing',
        },
        {
          course_id: 'CSS105',
          name: 'Fundamentals of Programming',
        },
        {
          course_id: 'INF106',
          name: 'Information and Communications Technologies',
        },
        {
          course_id: 'MAT151',
          name: 'Linear Algebra',
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("course", null, {});
  },
};
