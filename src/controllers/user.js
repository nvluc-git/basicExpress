import * as services from "../services/user";
exports.getUser = (req, res) => {
  res.send("get user ");
};
exports.findOne = async (req, res) => {
  const data = await services.findOne(req.params);
  res.send(data);
};
