const mongoose = require("mongoose");

const PlanSchema = new mongoose.Schema({
  titleEng: {
    type: String,
    required: [true, "must provide a name"],
    trim: true,
  },
  titleSrb: {
    type: String,
    required: [true, "must provide a name"],
    trim: true,
  },
  img: {
    type: String,
    required: [true, "must provide a name"],
    trim: true,
  },
  textEng: {
    type: String,
    required: [true, "must provide a name"],
    trim: true,
  },
  textSrb: {
    type: String,
    required: [true, "must provide a name"],
    trim: true,
  },
});

module.exports = mongoose.model("Plan", PlanSchema);
