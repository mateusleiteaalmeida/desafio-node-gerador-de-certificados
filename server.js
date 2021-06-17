const express = require("express");
const app = express();
const certificateRoute = require("./routes/certificateRoute");

app.set("view engine", "handlebars");
app.set("views", "./views");
app.use(express.json());
app.use(express.static(__dirname + "/public"));

app.use(certificateRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
