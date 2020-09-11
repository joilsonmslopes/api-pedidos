const express = require("express");
const statusValidate = require("./validate/status");
const pedidosValidate = require("./validate/pedidos");
const pratosValidate = require("./validate/pratos");
const routes = express.Router();

const pratosController = require("./controller/pratosController");
const statusController = require("./controller/statusController");
const pedidosController = require("./controller/pedidosController");

routes
  .get("/pratos", pratosController.list)
  .post("/pratos", pratosValidate, pratosController.add)
  .put("/pratos/:id", pratosValidate, pratosController.edit)
  .delete("/pratos/:id", pratosController.del);

routes
  .get("/status", statusController.list)
  .post("/status", statusValidate, statusController.add)
  .put("/status/:id", statusValidate, statusController.edit)
  .delete("/status/:id", statusController.del);

routes
  .get("/pedidos", pedidosController.list)
  .get("/pedidos", pedidosController.listByID)
  .post("/pedidos", pedidosValidate, pedidosController.add)
  .put("/pedidos/:id", pedidosValidate, pedidosController.edit)
  .delete("/pedidos/:id", pedidosController.del);

module.exports = routes;
