const mongoose = require("mongoose");

// define Schema Class
const Schema = mongoose.Schema;

// Create a Schema object
const quizSchema = new Schema({
  name: { type: String, required: true },
  sid: { type: Number, required: true },
});

const Quiz = mongoose.model("examrecords", quizSchema);
module.exports = Quiz;