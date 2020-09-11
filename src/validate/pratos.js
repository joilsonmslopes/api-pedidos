const Joi = require("joi");

// criar um template que vai validar as entradas
const statusSchema = Joi.object({
  nome: Joi.string().min(3).max(30).messages({
    "string.empty": `{#label} não pode ser vazio`,
    "string.min": `{#label} precisa ter no mínimo {#limit} caracteres`,
    "string.max": `{#label} não pode ultrapassar o máximo de {#limit} caracteres`,
    "any.required": `{#label} é obrigatório`,
  }),
}).unknown(true);
// para permitir qualquer outro tipo que nao tiver no contrato

const middleware = (req, res, next) => {
  const { error } = statusSchema.validate(req.body);
  // verifica se tem erro ou nao
  const valid = error == null;

  // se for valido ele segue com o seu codigo do post
  if (valid) {
    next();
  } else {
    const { details } = error;
    const message = details.map((i) => i.message).join(",");

    console.log("error", message);
    res.status(422).json({ error: message });
  }
};

module.exports = middleware;
