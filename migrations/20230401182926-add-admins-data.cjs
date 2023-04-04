module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "admins",
      [
        {
          adminId: 200107114,
        },
        {
          adminId: 200878192,
        },
        {
          adminId: 200107115,
        },
        {
          adminId: 200107042,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {},
};
