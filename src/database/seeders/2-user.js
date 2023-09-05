"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          username: "Nguyen Van Luc - luc dien",
          email: "nguyenvanluc@gmail.com",
          password: "$2a$12$T7V5pgSorQkCucZsR1KBre/igtqeyEUrkPtiHdVLDJj6/ckPsvIwq",
          age: 18,
          phonenumber: 123456789,
          bio: "anh luc dep trai",
          avatar: "/image/nguyenvanluc1",
          RoleId: 2
        }
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  },
};
