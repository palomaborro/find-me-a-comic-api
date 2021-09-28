const mongoose = require("mongoose");

require("dotenv").config();

const DB_NAME = 'FindMeAComic';
const URI = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const DB_URI = `${URI}/${DB_NAME}`;

mongoose
  .connect(DB_URI, {})
  .then(() => console.log(`Succesfully connected to ${DB_NAME}`))
  .catch((error) => console.error("Error connecting to DB", error));

process.on("SIGINT", () => {
  mongoose.connection
    .close()
    .then(() => console.log("Successfully disconnected from DB"))
    .catch((e) => console.error("Error disconnecting from DB", e))
    .finally(() => process.exit());
});