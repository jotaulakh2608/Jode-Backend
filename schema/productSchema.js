const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  picture: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  available: { type: Boolean, required: true },
  published: { type: Boolean, required: true },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
