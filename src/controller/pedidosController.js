const knex = require("../database");

const list = async (req, res, next) => {
  try {
    const totalPedidos = await knex("pedidos")
      .join("pratos", "pratos.id", "=", "pedidos.prato_id")
      .join("status", "status.id", "=", "pedidos.status_id")
      .select(
        "pedidos.id as PedidoID",
        "pedidos.cliente as Cliente",
        "status.nome as Status",
        "pratos.nome as Prato",
        "pratos.valor as Valor"
      );

    return res.status(200).json(totalPedidos);
  } catch (error) {
    next(error);
  }
};

const listByID = async (req, res, next) => {
  try {
    // const { id } = req.params;
    const { status_id } = req.query;

    const query = knex("pedidos");

    if ({ status_id }) {
      query
        .where({ status_id })
        // .join("pratos", "pratos.id", "=", "pedidos.prato_id")
        .join("status", "status.id", "=", "pedidos.status_id")
        .select(
          "pedidos.id as PedidoID",
          "pedidos.cliente as Cliente",
          "status.nome as Status"
          // "pratos.nome as Prato",
          // "pratos.valor as Valor"
        );
    }

    const results = await query;

    return res.status(200).send(results);
  } catch (error) {
    next(error);
  }
};

const add = async (req, res, next) => {
  try {
    const { cliente, quantidade, prato_id, status_id } = req.body;

    if (
      cliente == null ||
      quantidade == null ||
      prato_id == null ||
      status_id == null
    ) {
      return res.status(400).json({
        error: "Campos Obrigatórios! Por favor, preencher todos os campos!",
      });
    }

    if (quantidade < 1) {
      return res
        .status(400)
        .send({ error: "Por favor, escolha pelo menos 1 prato." });
    }

    if (prato_id < 1 || status_id < 1) {
      return res.status(400).send({ error: "ID não encontrado." });
    }

    await knex("pedidos").insert({
      cliente,
      quantidade,
      prato_id,
      status_id,
    });

    return res.status(201).json({ message: "Pedido Realizado com sucesso" });
  } catch (error) {
    next(error);
  }
};

const edit = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { cliente, quantidade, prato_id, status_id } = req.body;

    await knex("pedidos").where({ id }).update({
      cliente,
      quantidade,
      prato_id,
      status_id,
    });

    return res.status(200).send();
  } catch (error) {
    next(error);
  }
};

const del = async (req, res, next) => {
  try {
    const { id } = req.params;

    await knex("pedidos").where({ id }).del();

    return res.status(200).send();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  list,
  listByID,
  add,
  edit,
  del,
};
