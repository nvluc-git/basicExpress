import db from "../models";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const hashPassword = (password) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(8));

export const Register = ({ email, password }) =>
  new Promise(async (resolve, reject) => {
    try {
      const respone = await db.User.findOrCreate({
        where: { email },
        defaults: {
          email,
          password: hashPassword(password),
          role_code: 2,
        },
      });
      // console.log(respone[0].email);
      const token = respone[1]
        ? jwt.sign(
            {
              id: respone[0].id,
              email: respone[0].email,
              role_code: respone[0].role_code,
            },
            process.env.JWT_SECRET,
            { expiresIn: "5d" }
          )
        : null;
      resolve({
        err: respone[1] ? 0 : 1,
        mess: respone[1] ? "Register is successfully" : "email is used",
        access_token: token ? `Bearer ${token}` : null,
      });
    } catch (error) {
      reject(error);
    }
  });

export const Login = ({ email, password }) =>
  new Promise(async (resolve, reject) => {
    try {
      const respone = await db.User.findOne({
        where: { email },
        raw: true,
      });
      const isChecked =
        respone && bcrypt.compareSync(password, respone.password);
      const token = isChecked
        ? jwt.sign(
            {
              id: respone.id,
              email: respone.email,
              role_code: respone.role_code,
            },
            process.env.JWT_SECRET,
            { expiresIn: "5d" }
          )
        : null;
      resolve({
        err: token ? 0 : 1,
        mess: token
          ? "Login is successfully"
          : respone
          ? "inCorrect_password"
          : "unregistered email ",
        access_token: token ? `Bearer ${token}` : null,
      });
    } catch (error) {
      reject(error);
    }
  });
