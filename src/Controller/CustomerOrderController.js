const CustomerModal = require("../Modal/CustomerOrderModal");
const mongoose = require("mongoose");

const addCustomerOrder = async (req, res) => {
  try {
    await CustomerModal.insertMany(req.body, (err, data) => {
      if (err) throw "insert Operation failed";
      res.status(200).send(data);
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const getOrder = async (req, res) => {
  try {
    const custOrder = await CustomerModal.findById({
      _id: mongoose.Types.ObjectId(req.params.id),
    });
    if (!custOrder) {
      throw "get operation failed";
    }
    res.status(200).send(custOrder);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getProductByFilter = async (req, res) => {
  try {
    const filterData = await CustomerModal.find({
      createdAt: {
        $gte: req.body.startDate,
        $lte: req.body.endDate,
      },
    });
    if (!filterData) {
      throw "get Operation failed !";
    }
    res.status(200).send(filterData);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  addCustomerOrder,
  getOrder,
  getProductByFilter,
};
