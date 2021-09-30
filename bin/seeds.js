require("../config/db.config");
const mongoose = require("mongoose");
const faker = require("faker");
const User = require("../models/User.model");

let users = [];

mongoose.connection.once("open", () => {
  console.info(
    `*** Connected to the database ${mongoose.connection.db.databaseName} ***`
  );

  mongoose.connection.db
    .dropDatabase()
    .then(() => console.log("Database clear"))
    .then(() => {
      /** Create data here */
      for (let i = 0; i < 5; i++) {
        users.push({
          email: faker.internet.email(),
          password: "12345678",
          name: faker.name.findName(),
          image: faker.internet.avatar(),
        });
      }
      return User.create(users);
    })
    .then((dbusers) => {
      users = dbusers;
      const products = [];
    })
    .then(() => console.info(`- All data created!`))
    .catch((error) => console.error(error))
    .finally(() => process.exit(0));
});