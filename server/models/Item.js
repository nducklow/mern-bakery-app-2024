const { Schema, model } = require('mongoose');

const itemSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    img: {
      type: String,
    },
    cost: {
      type: Number,
    },
    calories: {
      type: Number

    }
  }
);

const Item = model('Item', itemSchema);

module.exports = Item;