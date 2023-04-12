module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "types",
      [
       {value: "Lecture"},
       {value: "Practice"},
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("types", null, {});
  },
};
