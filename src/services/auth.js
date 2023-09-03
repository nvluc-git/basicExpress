import db from "../models";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { mes, response } from "../config/common";

const hashPassword = (password) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(8));

export const Register = ({ email, password }) =>
  new Promise(async (resolve, reject) => {
    try {
      let data = { email, password }
      const checkData = await db.User.findOne({where: {email: email}, raw: true})
      const role = await db.Role.findOne({where: {code: "USER"}})

      if(checkData){
        delete data.password
        resolve(response(data, mes.REGISTER_FAIL))
        return;
      }
      data.password = hashPassword(password)
      data.RoleId = role.id
      await db.User.create(data)
      data.role = role.value
      const token = 
         jwt.sign(
            {          
              email: data.email,
              role: role.value,
            },
            process.env.JWT_SECRET,
            { expiresIn: "5d" }
          )
      
       
      data.access_token = token
      delete data.password
      delete data.Roleid
      resolve(response(data, mes.REGISTER_SUCCESSFULY));
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
