import db from "../models";
import { mes, response } from "../config/common";

exports.create = ({ code, value }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const respone = await db.Role.findOrCreate({
        where: { code: code },
        defaults: {
          code: code,
          value: value,
        },
      });

      resolve(
        response(
          {
            code: respone[0].code,
            value: respone[0].value,
          },
          respone[1] ? mes.INSERT_SUCCESSFULY : mes.INSERT_EXIST
        )
      );
    } catch (error) {
      reject(error);
    }
  });
};

exports.findAll = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const reponse = await db.Role.findAll({attributes: ["code", "value"]})

      resolve(
        response(reponse, mes.VIEW_SUCCESSFULY)
      )
    } catch (error) {
      reject(error)
    }
  })
}
