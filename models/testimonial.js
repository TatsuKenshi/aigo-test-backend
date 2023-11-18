const mongoose = require("mongoose");

const TestimonialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide a name"],
    trim: true,
    maxlength: [20, "name can't be longer than 20 characters"],
  },
  image: {
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

module.exports = mongoose.model("Testimonial", TestimonialSchema);
