import * as Services from "../services";
import { internalServerError, badRequest } from "../middlewares/handleErr";
import { email, password } from "../helper/joi_schema";
import joi from "joi";

export const Register = async (req, res) => {
  try {
    const { error } = joi.object({ email, password }).validate(req.body);
    if (error) return badRequest(error.details[0].message, res);
    const respone = await Services.Register(req.body);
    return res.status(200).json(respone);
  } catch (error) {
    return internalServerError(res);
  }
};

export const Login = async (req, res) => {
  try {
    const { error } = joi.object({ email, password }).validate(req.body);
    if (error) return badRequest(error.details[0].message, res);
    const respone = await Services.Login(req.body);
    return res.status(200).json(respone);
  } catch (error) {
    return internalServerError(res);
  }
};
