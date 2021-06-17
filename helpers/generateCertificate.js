const puppeteer = require("puppeteer");
const path = require("path");
const handlebars = require("handlebars");
const fs = require("fs");

const generateCertificate = async (req, res, data) => {
  const templateHtml = fs.readFileSync(
    path.join(__dirname, "../views/certificate.hbs"),
    "utf8"
  );
  const template = handlebars.compile(templateHtml);
  const html = template(data);

  const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
  const page = await browser.newPage();

  await page.goto(`data:text/html;charset=UTF-8,${html}`, {
    waitUntil: "networkidle0",
  });

  const pdf = await page.pdf({
    printBackground: true,
    displayHeaderFooter: false,
    height: "17cm",
    width: "21cm",
  });

  await browser.close();

  res.contentType("application/pdf");

  return res.status(201).send(pdf);
};

module.exports = generateCertificate;
