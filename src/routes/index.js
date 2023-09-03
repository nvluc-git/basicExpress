import user from "./user";
import role from "./role";
import auth from "./auth";
import { notFound } from "../middlewares/handleErr";
function initRoute(app) {
  app.use("/user", user);
  app.use("/auth", auth);
  app.use("/role", role);
  app.use(notFound);

  app.use("/", (req, res) => {
    res.send("hello");
  });
}

export default initRoute;
