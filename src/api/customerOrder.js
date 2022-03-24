const express = require("express");
const router = express.Router();

const customerOrderController = require("../Controller/CustomerOrderController");

router.post("/addCustomerOrder", customerOrderController.addCustomerOrder);
router.get("/:id", customerOrderController.getOrder);
router.post("/getProduct", customerOrderController.getProductByFilter);

module.exports = router;
