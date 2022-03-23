const express = require("express");
const router = express.Router();

const customerOrderController = require("../Controller/CustomerOrderController");

router.post("/addCustomerOrder", customerOrderController.addCustomerOrder);

module.exports = router;
