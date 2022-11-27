const mongoose = require("mongoose");

const challengeSchema = new mongoose.Schema({
  name: String,
  images: [String],
  description: String,
  location: String,
  theme: String,
  task: String,
  startDate: String,
  endDate: String,
});

const ChallengeModel = mongoose.model("Challanges", challengeSchema);

module.exports = { ChallengeModel };
