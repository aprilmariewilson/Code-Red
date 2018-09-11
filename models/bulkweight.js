const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bulkweightSchema = new Schema({
name: {type:String, trim: true},
level: {type: String},
muscleGroups: {type: String},
instructions: {type: String, trim:true}
});
const Bulkweight= mongoose.model("Bulkweight", bulkweightSchema);

module.exports = Bulkweight;
