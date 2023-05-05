module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          userId: 200107032,
          firstName: "Samat",
          lastName: "Zhumamuratov",
          password: "$2a$10$oOcU7x4wMKZgceHAzkpOfutUmn1iEvOr07HQAJIneqRDmLsMYaS1.",
          roleId: "admin",
        },
        {
          userId: 200107111,
          firstName: "Lyazzat",
          lastName: "Atymtayeva",
          password: "$2a$10$oOcU7x4wMKZgceHAzkpOfutUmn1iEvOr07HQAJIneqRDmLsMYaS1.",
          roleId: "teacher",
        },
        {
          userId: 200107112,
          firstName: "Inkar",
          lastName: "Shoganova",
          password: "$2a$10$oOcU7x4wMKZgceHAzkpOfutUmn1iEvOr07HQAJIneqRDmLsMYaS1.",
          roleId: "teacher",
        },
        {
          userId: 200107113,
          firstName: "Akniyet",
          lastName: "Talgatkyzy",
          password: "$2a$10$oOcU7x4wMKZgceHAzkpOfutUmn1iEvOr07HQAJIneqRDmLsMYaS1.",
          roleId: "student",
        },
        {
          userId: 200107114,
          firstName: "Dilnaz",
          lastName: "Zhumabaikyzy",
          password: "$2a$10$oOcU7x4wMKZgceHAzkpOfutUmn1iEvOr07HQAJIneqRDmLsMYaS1.",
          roleId: "student",
        },
        {
          userId: 200107115,
          firstName: "Azat",
          lastName: "Kulakhmet",
          password: "$2a$10$oOcU7x4wMKZgceHAzkpOfutUmn1iEvOr07HQAJIneqRDmLsMYaS1.",
          roleId: "student",
        },
        {
          userId: 200107116,
          firstName: "Damir",
          lastName: "Aliyev",
          password: "$2a$10$oOcU7x4wMKZgceHAzkpOfutUmn1iEvOr07HQAJIneqRDmLsMYaS1.",
          roleId: "student",
        },
        {
          userId: 200107117,
          firstName: "Akbope",
          lastName: "Zhengiskhan",
          password: "$2a$10$oOcU7x4wMKZgceHAzkpOfutUmn1iEvOr07HQAJIneqRDmLsMYaS1.",
          roleId: "student",
        },
        {
          userId: 200107118,
          firstName: "Satzhan",
          lastName: "Kadyr",
          password: "$2a$10$oOcU7x4wMKZgceHAzkpOfutUmn1iEvOr07HQAJIneqRDmLsMYaS1.",
          roleId: "student",
        },
        {
          userId: 200107022,
          firstName: "Rauan",
          lastName: "Orynbasar",
          password: "$2a$10$oOcU7x4wMKZgceHAzkpOfutUmn1iEvOr07HQAJIneqRDmLsMYaS1.",
          roleId: "student",
        },
        {
          userId: 200107119,
          firstName: "Bakdaulet",
          lastName: "Mukashov",
          password: "$2a$10$oOcU7x4wMKZgceHAzkpOfutUmn1iEvOr07HQAJIneqRDmLsMYaS1.",
          roleId: "student",
        },
        {
          userId: 200107073,
          firstName: "Aslan",
          lastName: "Abenov",
          password: "$2a$10$oOcU7x4wMKZgceHAzkpOfutUmn1iEvOr07HQAJIneqRDmLsMYaS1.",
          roleId: "student",
        },
        {
          userId: 200107080,
          firstName: "Arnibek",
          lastName: "Nussupekov",
          password: "$2a$10$oOcU7x4wMKZgceHAzkpOfutUmn1iEvOr07HQAJIneqRDmLsMYaS1.",
          roleId: "student",
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("lessons", null, {});
  },
};
