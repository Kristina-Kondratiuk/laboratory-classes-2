const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const { getInfoLog, getErrorLog } = require("./utils/logger");
const config = require("./config");

const productRoutes = require("./routing/product");
const logoutRoutes = require("./routing/logout");
const killRoutes = require("./routing/kill");
const homeRoutes = require("./routing/home");

const STATUS_CODE = {
  NOT_FOUND: 404
};

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
  console.log(getInfoLog(req));
  next();
});

app.use("/product", productRoutes);
app.use("/logout", logoutRoutes);
app.use("/kill", killRoutes);
app.use(homeRoutes);

app.use((req, res) => {
  console.log(getErrorLog(req));
  res
    .status(STATUS_CODE.NOT_FOUND)
    .sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(config.PORT, () => {
  console.log(`Server is listening on port ${config.PORT}`);
});