const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../docs/swagger.json");

app.use("/swagger", swaggerUi.serve);
app.get("/swagger", swaggerUi.setup(swaggerDocument));

const routes = require("./routes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes);

app.listen(3000, function () {
  console.log("server is running ...");
});
