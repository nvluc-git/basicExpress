import * as services from "../services/user";
const getUser = (req, res) => {
  res.send("get user ");
};
const userDetail = async (req, res) => {
  const data = await services.userDetail(req.body);
  res.send(data);
};

export default { getUser, userDetail };
