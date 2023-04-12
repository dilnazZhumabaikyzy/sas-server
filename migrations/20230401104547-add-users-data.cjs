module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          userId: 200107110,
          firstName: "Iam",
          lastName: "Admin",
          password: "$2a$10$oOcU7x4wMKZgceHAzkpOfutUmn1iEvOr07HQAJIneqRDmLsMYaS1.",
          roleId: "admin",
        },
        {
          userId: 200107111,
          firstName: "Iam",
          lastName: "Teacher1",
          password: "$2a$10$oOcU7x4wMKZgceHAzkpOfutUmn1iEvOr07HQAJIneqRDmLsMYaS1.",
          roleId: "teacher",
        },
        {
          userId: 200107112,
          firstName: "Iam",
          lastName: "Teacher2",
          password: "$2a$10$oOcU7x4wMKZgceHAzkpOfutUmn1iEvOr07HQAJIneqRDmLsMYaS1.",
          roleId: "teacher",
        },
        {
          userId: 200107113,
          firstName: "John",
          lastName: "Gary",
          password: "$2a$10$oOcU7x4wMKZgceHAzkpOfutUmn1iEvOr07HQAJIneqRDmLsMYaS1.",
          roleId: "student",
        },
        {
          userId: 200107114,
          firstName: "Samat",
          lastName: "Zhumamuratov",
          password: "$2a$10$oOcU7x4wMKZgceHAzkpOfutUmn1iEvOr07HQAJIneqRDmLsMYaS1.",
          roleId: "student",
        },
        {
          userId: 200107115,
          firstName: "Bakdaulet",
          lastName: "Mukashov",
          password: "$2a$10$oOcU7x4wMKZgceHAzkpOfutUmn1iEvOr07HQAJIneqRDmLsMYaS1.",
          roleId: "student",
        },
        {
          userId: 200107116,
          firstName: "Aslan",
          lastName: "Abenov",
          password: "$2a$10$oOcU7x4wMKZgceHAzkpOfutUmn1iEvOr07HQAJIneqRDmLsMYaS1.",
          roleId: "student",
        },
        {
          userId: 200107117,
          firstName: "Rauan",
          lastName: "Orynbasar",
          password: "$2a$10$oOcU7x4wMKZgceHAzkpOfutUmn1iEvOr07HQAJIneqRDmLsMYaS1.",
          roleId: "student",
        },
        {
          userId: 200107118,
          firstName: "Dilnaz",
          lastName: "Zhumabaikyzy",
          password: "$2a$10$oOcU7x4wMKZgceHAzkpOfutUmn1iEvOr07HQAJIneqRDmLsMYaS1.",
          roleId: "student",
        },
        {
          userId: 200107119,
          firstName: "Arnibek",
          lastName: "Nussupekov",
          password: "$2a$10$oOcU7x4wMKZgceHAzkpOfutUmn1iEvOr07HQAJIneqRDmLsMYaS1.",
          roleId: "student",
        },
        {
          userId: 200107120,
          firstName: "Akbope",
          lastName: "Zhengiskhan",
          password: "$2a$10$oOcU7x4wMKZgceHAzkpOfutUmn1iEvOr07HQAJIneqRDmLsMYaS1.",
          roleId: "student",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {},
};
