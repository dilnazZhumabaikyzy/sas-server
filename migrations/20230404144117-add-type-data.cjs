module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "type",
      [
       {value: "Lecture"},
       {value: "Practice"},
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("type", null, {});
  },
};
