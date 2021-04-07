const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
    minlength: 4,
  },
  description: {
    type: String,
    required: true,
  },
  actors: {
    type: String,
    required: true,
  },
  posterURL: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Movie", movieSchema);
