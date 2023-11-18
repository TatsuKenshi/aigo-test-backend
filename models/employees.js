const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide a name"],
    trim: true,
    maxlength: [40, "name can't be longer than 40 characters"],
  },
  jobEng: {
    type: String,
    required: [true, "must provide a name"],
    trim: true,
  },
  jobSrb: {
    type: String,
    required: [true, "must provide a name"],
    trim: true,
  },
  image: {
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

module.exports = mongoose.model("Employee", EmployeeSchema);
