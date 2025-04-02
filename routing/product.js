const express = require("express");
const path = require("path");
const fs = require("fs");
const STATUS_CODE = { FOUND: 302 };
const renderNewProductPage = require("../views/renderNewProductPage");

const router = express.Router();

// GET /product/add
router.get("/add", (req, res) => {
  res.sendFile(path.join(__dirname, "../views", "add-product.html"));
});

// POST /product/add
router.post("/add", (req, res) => {
  const { name, description } = req.body;
  const productData = `Name: ${name}, Description: ${description}`;

  fs.writeFile("product.txt", productData, (err) => {
    if (err) return res.status(500).send("Error saving product.");
    res.redirect(STATUS_CODE.FOUND, "/product/new");
  });
});

// GET /product/new
router.get("/new", (req, res) => {
  fs.readFile("product.txt", "utf-8", (err, data) => {
    const html = renderNewProductPage(data);
    res.send(html);
  });
});

module.exports = router;
