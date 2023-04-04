module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          user_id: 200107114,
          firstName: "John",
          lastName: "Galt",
          password: "a12jjen34o29",
          role: "admin",
        },
        {
          user_id: 200878192,
          firstName: "John",
          lastName: "Doe",
          password: "a12jjen34o29",
          role: "admin",
        },
        {
          user_id: 200107115,
          firstName: "John",
          lastName: "Gary",
          password: "a12jjen34o29",
          role: "admin",
        },
        {
          user_id: 200107032,
          firstName: "Samat",
          lastName: "Zhumamuratov",
          password: "equrylys",
          role: "student",
        },
        {
          user_id: 200107119,
          firstName: "Bakdaulet",
          lastName: "Mukashov",
          password: "androiddeveloper",
          role: "student",
        },
        {
          user_id: 200107073,
          firstName: "Aslan",
          lastName: "Abenov",
          password: "macbook",
          role: "teacher",
        },
        {
          user_id: 200107022,
          firstName: "Rauan",
          lastName: "Orynbasar",
          password: "magnuscarlsen",
          role: "teacher",
        },
        {
          user_id: 200107118,
          firstName: "Dilnaz",
          lastName: "Zhumabaikyzy",
          password: "onanepredstavlyaetveszapad",
          role: "student",
        },
        {
          user_id: 200107042,
          firstName: "Arnibek",
          lastName: "Nussupekov",
          password: "ianefrontender",
          role: "admin",
        },
        {
          user_id: 200107052,
          firstName: "Akbope",
          lastName: "Zhengiskhan",
          password: "uiux",
          role: "student",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {},
};
