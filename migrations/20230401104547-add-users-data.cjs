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
          role_id: "teacher",
        },
        {
          userId: 200878192,
          firstName: "John",
          lastName: "Doe",
          password: "a12jjen34o29",
          role_id: "admin",
        },
        {
          userId: 200107115,
          firstName: "John",
          lastName: "Gary",
          password: "a12jjen34o29",
          role_id: "admin",
        },
        {
          userId: 200107032,
          firstName: "Samat",
          lastName: "Zhumamuratov",
          password: "equrylys",
          role_id: "student",
        },
        {
          userId: 200107119,
          firstName: "Bakdaulet",
          lastName: "Mukashov",
          password: "androiddeveloper",
          role_id: "student",
        },
        {
          userId: 200107073,
          firstName: "Aslan",
          lastName: "Abenov",
          password: "macbook",
          role_id: "teacher",
        },
        {
          userId: 200107022,
          firstName: "Rauan",
          lastName: "Orynbasar",
          password: "magnuscarlsen",
          role_id: "teacher",
        },
        {
          userId: 200107118,
          firstName: "Dilnaz",
          lastName: "Zhumabaikyzy",
          password: "onanepredstavlyaetveszapad",
          role_id: "student",
        },
        {
          userId: 200107042,
          firstName: "Arnibek",
          lastName: "Nussupekov",
          password: "ianefrontender",
          role_id: "admin",
        },
        {
          userId: 200107052,
          firstName: "Akbope",
          lastName: "Zhengiskhan",
          password: "uiux",
          role_id: "student",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {},
};
