import db from "../models";
import Sequelize from "sequelize"

exports.findOne = ({ id }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await db.User.findOne({
        where: { id: id },
        include: {
          model: db.Role,
          attributes: [],
          as: "roleId"
        },
        attributes: ["name", "email", "avatar", [Sequelize.col("roleId.value"), "role"]],
        raw: true
      });

      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

