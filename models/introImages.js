const mongoose = require("mongoose");

const IntroimageSchema = new mongoose.Schema({
  image: {
    type: String,
    required: [true, "must provide a name"],
    trim: true,
  },
  name: {
    type: String,
    required: [true, "must provide a name"],
    trim: true,
  },
  title: {
    type: String,
    required: [true, "must provide a name"],
    trim: true,
  },
  quoteEng: {
    type: String,
    required: [true, "must provide a name"],
    trim: true,
  },
  quoteSrb: {
    type: String,
    required: [true, "must provide a name"],
    trim: true,
  },
});

module.exports = mongoose.model("Introimage", IntroimageSchema);
