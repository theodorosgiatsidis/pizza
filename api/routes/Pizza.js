const router = require("express").Router();
const Pizza = require("../models/Pizza");
const auth = require("../middleware/auth");

//CREATE A PRODUCT
router.post("/", async (req, res) => {
  const newPizza = new Pizza(req.body);
  try {
    const savedPizza = await newPizza.save();
    res.status(200).json(savedPizza);
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET PRODUCT
router.get("/", async (req, res) => {
  try {
    const pizzas = await Pizza.find();
    res.status(200).json(pizzas);
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET PRODUCT by id

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Pizza.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
