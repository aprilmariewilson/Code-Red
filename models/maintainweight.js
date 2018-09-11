const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const maintainweightSchema = new Schema({
name: {type:String, trim: true},
level: {type: String},
muscleGroups: {type: String},
instructions: {type: String, trim:true}
});
const Maintainweight= mongoose.model("Maintainweight", maintainweightSchema);

module.exports = Maintainweight;