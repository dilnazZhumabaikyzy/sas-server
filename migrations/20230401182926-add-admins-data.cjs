module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "admins",
      [
        {
          admin_id: 200107114,
        },
        {
          admin_id: 200878192,
        },
        {
          admin_id: 200107115,
        },
        {
          admin_id: 200107042,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {},
};
