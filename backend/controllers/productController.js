const { Product } = require("../models");

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.createProduct = async (req, res) => {
  try {
    const { name, description, price, image } = req.body;
    const newProduct = await Product.create({ name, description, price, image });
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
