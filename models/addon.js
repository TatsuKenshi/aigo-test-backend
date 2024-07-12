const mongoose = require("mongoose");

const AddonSchema = new mongoose.Schema({
  img: {
    type: String,
    required: [true, "must provide a name"],
    trim: true,
  },
  name: {
    type: String,
    required: [true, "must provide a name"],
    trim: true,
  },
  price: {
    type: String,
    required: [true, "must provide a name"],
    trim: true,
  },
  descEng: {
    type: String,
    required: [true, "must provide a name"],
    trim: true,
  },
  descSrb: {
    type: String,
    required: [true, "must provide a name"],
    trim: true,
  },
});

module.exports = mongoose.model("Addon", AddonSchema);
