const knex = require("../database");

const list = async (req, res, next) => {
  try {
    const totalPratos = await knex("pratos");

    return res.status(200).json(totalPratos);
  } catch (error) {
    next(error);
  }
};

const add = async (req, res, next) => {
  try {
    const { nome, serve_pessoas, valor } = req.body;

    if (nome == null || serve_pessoas == null || valor == null) {
      return res.status(400).json({
        error: "Campos Obrigatórios! Por favor, preencher todos os campos!",
      });
    }

    if (serve_pessoas < 1) {
      return res.status(400).send({ error: "Quantidade mínima é 1." });
    }

    if (valor < 1) {
      return res.status(400).send({ error: "Por favor, digite um valor." });
    }

    await knex("pratos").insert({
      nome,
      serve_pessoas,
      valor,
    });

    return res.status(201).json({ message: "Prato Cadastrado" });
  } catch (error) {
    next(error);
  }
};

const edit = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { nome, serve_pessoas, valor } = req.body;

    await knex("pratos").where({ id }).update({
      nome,
      serve_pessoas,
      valor,
    });

    return res.status(200).json({ message: "Produto alterado com sucesso." });
  } catch (error) {
    next(error);
  }
};

const del = async (req, res, next) => {
  try {
    const { id } = req.params;

    await knex("pratos").where({ id }).del();

    return res.status(200).json({ message: "Produto deletado com sucesso." });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  list,
  add,
  edit,
  del,
};
