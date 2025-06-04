const express = require("express");
const { getAllProducts, createProduct } = require("../controllers/productController");
router.post("/", createProduct);


const router = express.Router();
router.get("/", getAllProducts);

module.exports = router;
