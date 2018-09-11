const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    dob: {type: Date},
    email: {type: String, required: true, unique: true},
    goal: {type: String}	
});

// Set up passport to 
userSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', userSchema);

module.exports = User;