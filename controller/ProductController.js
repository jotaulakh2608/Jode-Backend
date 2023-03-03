const Product = require("../schema/productSchema");

const createProduct = async (req, res, next) => {
  req.body.picture = req.file.filename;
  try {
    const product = await Product.create(req.body);
    product.save();
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
const deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const data = await Product.find({});
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getOneProduct = async (req, res) => {
  try {
    const data = await Product.findOne({ _id: req.params.id });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createProduct,
  deleteProduct,
  getOneProduct,
  getAllProducts,
};
