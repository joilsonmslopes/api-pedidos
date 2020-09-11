const knex = require("../database");

const list = async (req, res, next) => {
  try {
    const totalStatus = await knex("status");

    return res.status(200).json(totalStatus);
  } catch (error) {
    next(error);
  }
};

const add = async (req, res, next) => {
  try {
    const { nome } = req.body;

    if (nome == null) {
      res.status(400).json({
        error: "Campos Obrigatórios! Por favor, preencher todos os campos!",
      });
    }

    await knex("status").insert({
      nome,
    });

    return res.status(201).json({ message: "Status Cadastrado" });
  } catch (error) {
    next(error);
  }
};

const edit = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { nome } = req.body;

    await knex("status").where({ id }).update({
      nome,
    });

    return res.status(200).json({ message: "Status alterado com sucesso." });
  } catch (error) {
    next(error);
  }
};

const del = async (req, res, next) => {
  try {
    const { id } = req.params;

    await knex("status").where({ id }).del();

    return res.status(200).json({ message: "Status deletado com sucesso." });
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
