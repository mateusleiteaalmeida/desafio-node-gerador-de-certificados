const certificateService = require("../services/certificateService");

const createCertificate = async (req, res) => {
  try {
    const data = req.body;
    const result = await certificateService.createCertificate(req, res, data);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

module.exports = {
  createCertificate,
};
