const joi = require("joi");
const generateCertificate = require("../helpers/generateCertificate");

const validateCertificateData = (data) =>
  joi
    .object({
      name: joi
        .string()
        .required()
        .messages({ "any.required": "É necessário inserir o nome do aluno" }),
      course: joi
        .string()
        .required()
        .messages({ "any.required": "É necessário inserir o nome do curso" }),
      date: joi
        .string()
        .required()
        .messages({ "any.required": "É necessário inserir a data do curso" }),
      school: joi
        .string()
        .required()
        .messages({
          "any.required":
            "É necessário inserir o nome da instituição de ensino",
        }),
      professor: joi
        .string()
        .required()
        .messages({
          "any.required": "É necessário inserir o nome do professor",
        }),
      hours: joi
        .number()
        .required()
        .messages({
          "any.required": "É necessário inserir o número de horas cursadas",
        }),
    })
    .validate(data);

const createCertificate = async (req, res, data) => {
  const { error } = validateCertificateData(data);
  if (error) return res.status(400).send({ message: error.message });
  await generateCertificate(req, res, data);
};

module.exports = {
  createCertificate,
};
