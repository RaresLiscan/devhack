const mongoose = require("mongoose");

async function initMongoose() {
  try {
    await mongoose.connect(
      "mongodb+srv://devhack:devhack123@cluster0.iycvcaj.mongodb.net/?retryWrites=true&w=majority"
    );
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  initMongoose,
};
