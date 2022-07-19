const dbConfig = require("../config/db.config.js");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.users = require("./users.model.js")(mongoose);
db.dates = require("./dates.model.js")(mongoose);
module.exports = db;


/* 
  Based off of:
  https://signoz.io/blog/mevn-stack-tutorial/
*/