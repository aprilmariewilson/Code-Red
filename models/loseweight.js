const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const loseweightSchema = new Schema({
name: {type:String, trim: true},
level: {type: String},
muscleGroups: {type: String},
instructions: {type: String, trim:true}
});
const Loseweight= mongoose.model("Loseweight", loseweightSchema);

module.exports = Loseweight;