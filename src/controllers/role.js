import * as services from "../services/role";
exports.create = async (req, res) => {
  const data = await services.create(req.body);
  res.send(data);
};

exports.findAll = async (req, res) => {
  const data = await services.findAll()
  res.send(data)
}
