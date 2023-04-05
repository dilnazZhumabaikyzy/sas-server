module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          userId: 200107114,
          firstName: "John",
          lastName: "Galt",
          password: "a12jjen34o29",
          roleId: "teacher",
        },
        {
          userId: 200878192,
          firstName: "John",
          lastName: "Doe",
          password: "a12jjen34o29",
          roleId: "admin",
        },
        {
          userId: 200107115,
          firstName: "John",
          lastName: "Gary",
          password: "a12jjen34o29",
          roleId: "admin",
        },
        {
          userId: 200107032,
          firstName: "Samat",
          lastName: "Zhumamuratov",
          password: "equrylys",
          roleId: "student",
        },
        {
          userId: 200107119,
          firstName: "Bakdaulet",
          lastName: "Mukashov",
          password: "androiddeveloper",
          roleId: "student",
        },
        {
          userId: 200107073,
          firstName: "Aslan",
          lastName: "Abenov",
          password: "macbook",
          roleId: "teacher",
        },
        {
          userId: 200107022,
          firstName: "Rauan",
          lastName: "Orynbasar",
          password: "magnuscarlsen",
          roleId: "teacher",
        },
        {
          userId: 200107118,
          firstName: "Dilnaz",
          lastName: "Zhumabaikyzy",
          password: "onanepredstavlyaetveszapad",
          roleId: "student",
        },
        {
          userId: 200107042,
          firstName: "Arnibek",
          lastName: "Nussupekov",
          password: "ianefrontender",
          roleId: "admin",
        },
        {
          userId: 200107052,
          firstName: "Akbope",
          lastName: "Zhengiskhan",
          password: "uiux",
          roleId: "student",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {},
};
