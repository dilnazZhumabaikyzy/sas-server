module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "roles",
      [
        {
          value: "teacher",
        },
        {
          value: "admin",
        },
        {
          value: "student",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {},
};
