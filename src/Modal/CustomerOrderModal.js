const mongoose = require("mongoose");

const customerOrderSchema = mongoose.Schema({
  createdAt: { type: Date, default: new Date() },
  customerName: { type: String, required: true },
  customerOrder: [],
});

const customerOrderModal = mongoose.model("customerOrder", customerOrderSchema);

module.exports = customerOrderModal;
