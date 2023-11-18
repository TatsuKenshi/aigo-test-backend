const mongoose = require("mongoose");

const StoryitemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide a name"],
    trim: true,
    maxlength: [40, "name can't be longer than 40 characters"],
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

module.exports = mongoose.model("Storyitem", StoryitemSchema);
