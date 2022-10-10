const mongoose = require("mongoose");

const shoppingItemSchema = mongoose.Schema({
  itemName: {
    type: String,
    required: true,
  },
  itemQuantity: {
    type: Number,
    requiered: true,
  },
  itemBought: {
    type: Boolean,
  },
});

const Item = (module.exports = mongoose.model("Item", shoppingItemSchema));
