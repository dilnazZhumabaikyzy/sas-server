module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "admins",
      [
        {
          adminId: 200107110,
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {},
};
