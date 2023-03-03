const express = require("express");
const {
  createProduct,
  getAllProducts,
  deleteProduct,
  getOneProduct,
} = require("../controller/ProductController");
const multer = require("multer");
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});
const upload = multer({ storage: storage });
router.post("/create", upload.single("picture"), createProduct);
router.get("/all", getAllProducts);
router.get("/:id", getOneProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
