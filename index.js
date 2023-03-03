const express = require("express");
const cors = require("cors");
const connection = require("./connection");
const bodyParser = require("body-parser");
const app = express();
const productRoute = require("./routes/ProductRoutes");
app.use(cors());
app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const port = "8000";

connection();

app.use("/products", productRoute);
app.use("/images", express.static("./images"));

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
