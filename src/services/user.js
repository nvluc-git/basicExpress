const db = require("../models");
import { Op } from "sequelize";

exports.userDetail = ({ id }) => {
  return new Promise((resolve, reject) => {
    try {
      const data = db.User.findOne({
        where: { id: id },
        include: [{ model: Role, require: true }],
        attribute: ["name", "email", "value"],
      });

      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};
