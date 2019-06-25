const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shitSchema = new Schema({
  item: { type: String, required: true },
  type: { type: String, required: true },
  journal: String,
  date: { type: Date, default: Date.now }
});

const Shit = mongoose.model("Shit", shitSchema);

module.exports = Shit;
