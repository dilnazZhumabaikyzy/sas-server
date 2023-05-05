module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "admins",
      [
        {
          adminId: 200107032,
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) { },
};
