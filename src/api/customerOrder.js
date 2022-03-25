const express = require("express");
const router = express.Router();

const customerOrderController = require("../Controller/CustomerOrderController");
const customerOrderModal = require("../Modal/CustomerOrderModal");

router.get("/getCustomerName", async (req, res) => {
  try {
    const allCustomer = await customerOrderModal.find({});
    if (!allCustomer) {
      throw "get Operation failed";
    }
    const customerName = allCustomer.map((m) => m.customerName);
    res.status(200).send(customerName);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.post("/addCustomerOrder", customerOrderController.addCustomerOrder);
router.get("/:id", customerOrderController.getOrder);
router.post("/getProduct", customerOrderController.getProductByFilter);

module.exports = router;
