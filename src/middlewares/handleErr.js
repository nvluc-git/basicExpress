import createErr from "http-errors";
export const badRequest = (err, res) => {
  const error = createErr.BadRequest(err);
  return res.status(error.status).json({
    err: 1,
    mess: error.message,
  });
};

export const internalServerError = (res) => {
  const error = createErr.InternalServerError();
  return res.status(error.status).json({
    err: 1,
    mess: error.message,
  });
};

export const notFound = (req, res) => {
  const error = createErr.NotFound("This route is not defined");
  return res.status(error.status).json({
    err: 1,
    mess: error.message,
  });
};
