const { Router } = require("express");
const router = Router();

const certificateController = require("../controllers/certificateController");

router.post("/certificado", certificateController.createCertificate);

module.exports = router;
