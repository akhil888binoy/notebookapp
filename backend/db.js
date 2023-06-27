const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/?useNewUrlParser=true";

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("connected to mongo success");
  } catch (error) {
    console.error(error);
  }
};

module.exports = connectToMongo;
