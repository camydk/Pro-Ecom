const { Product } = require("../models");
const sequelize = require("../config/db");

const seed = async () => {
  try {
    await sequelize.sync({ force: true }); // recreate tables

    await Product.bulkCreate([
      { name: "Laptop", description: "Gaming laptop", price: 95000, image: "https://via.placeholder.com/150" },
      { name: "Headphones", description: "Wireless", price: 2999, image: "https://via.placeholder.com/150" },
      { name: "Shoes", description: "Running shoes", price: 3999, image: "https://via.placeholder.com/150" }
    ]);

    console.log("Seed completed.");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seed();
