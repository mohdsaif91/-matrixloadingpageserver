const CustomerModal = require("../Modal/CustomerOrderModal");

const addCustomerOrder = async (req, res) => {
  try {
    await CustomerModal.insertMany(req.body, (err, data) => {
      if (err) throw "insert Operation failed";
      res.status(200).send(data);
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

module.exports = {
  addCustomerOrder,
};
