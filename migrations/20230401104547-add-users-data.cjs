module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          user_id: 200107114,
          first_name: "John",
          last_name: "Galt",
          password: "a12jjen34o29",
          role_id: "teacher",
        },
        {
          user_id: 200878192,
          first_name: "John",
          last_name: "Doe",
          password: "a12jjen34o29",
          role_id: "admin",
        },
        {
          user_id: 200107115,
          first_name: "John",
          last_name: "Gary",
          password: "a12jjen34o29",
          role_id: "admin",
        },
        {
          user_id: 200107032,
          first_name: "Samat",
          last_name: "Zhumamuratov",
          password: "equrylys",
          role_id: "student",
        },
        {
          user_id: 200107119,
          first_name: "Bakdaulet",
          last_name: "Mukashov",
          password: "androiddeveloper",
          role_id: "student",
        },
        {
          user_id: 200107073,
          first_name: "Aslan",
          last_name: "Abenov",
          password: "macbook",
          role_id: "teacher",
        },
        {
          user_id: 200107022,
          first_name: "Rauan",
          last_name: "Orynbasar",
          password: "magnuscarlsen",
          role_id: "teacher",
        },
        {
          user_id: 200107118,
          first_name: "Dilnaz",
          last_name: "Zhumabaikyzy",
          password: "onanepredstavlyaetveszapad",
          role_id: "student",
        },
        {
          user_id: 200107042,
          first_name: "Arnibek",
          last_name: "Nussupekov",
          password: "ianefrontender",
          role_id: "admin",
        },
        {
          user_id: 200107052,
          first_name: "Akbope",
          last_name: "Zhengiskhan",
          password: "uiux",
          role_id: "student",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {},
};
