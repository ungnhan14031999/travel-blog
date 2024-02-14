import express from "express";

let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", (req, res) => {
    return res.send("Hello with Michi");
  });

  return app.use("/", router);
};

module.exports = initWebRoutes;
