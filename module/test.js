const mongoose = require("mongoose");
let test = mongoose.Schema({
    userID: String,
    msg: String
});
module.exports = mongoose.model("test", test);