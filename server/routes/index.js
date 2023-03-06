const apiRouter = require("express").Router();
const v1 = require("./v1");
const apiDocs = require("../api/openapi.json");
const swaggerUI = require("swagger-ui-express");

apiRouter.get("/", (req, res) => {
  res.send("test");
});

apiRouter.use("/v1", v1);

apiRouter.use("/docs", swaggerUI.serve, swaggerUI.setup(apiDocs));

module.exports = apiRouter;
