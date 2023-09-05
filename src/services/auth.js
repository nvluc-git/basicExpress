import db from "../database/models";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { mes, response } from "../config/common";
import Sequelize from "sequelize"

const hashPassword = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(8));

export const Register = ({ email, password }) =>
  new Promise(async (resolve, reject) => {
    try {
      let data = { email, password };
      const checkData = await db.User.findOne({ where: { email: email }, raw: true });
      const role = await db.Role.findOne({ where: { code: "USER" } });

      if (!role) {
        delete data.password;
        resolve(response(data, mes.REGISTER_FAIL_ROLE));
        return;
      }
      if (checkData || !role) {
        delete data.password;
        resolve(response(data, mes.REGISTER_FAIL_EXIST));
        return;
      }
      data.password = hashPassword(password);
      data.RoleId = role.id;
      data.username = "New user";
      await db.User.create(data);
      resolve(response(email, mes.REGISTER_SUCCESSFULY));
    } catch (error) {
      reject(error);
    }
  });

export const Login = ({ email, password }) =>
  new Promise(async (resolve, reject) => {
    try {
      const respone = await db.User.findOne({
        where: { email: email },
        include: {
          model: db.Role,
          attributes: [],
          as: "roleId"
        },
        attributes: ["username", "email", "password", [Sequelize.col("roleId.name"), "role"]],
        raw: true
      });

      if(!respone){
        resolve(response({email: email}, mes.LOGIN_FAIL));
        return
      }

      const isChecked = bcrypt.compareSync(password, respone.password);
      const token = isChecked
        ? jwt.sign(
            {
              email: respone.email,
              role: respone.role,
            },
            process.env.JWT_SECRET,
            { expiresIn: "1d" },
          )
        : null;

      resolve(response({token: token, username: respone.username, email: respone.email, role: respone.role}, mes.LOGIN_SUCCESSFULY));
    } catch (error) {
      reject(error);
    }
  });
