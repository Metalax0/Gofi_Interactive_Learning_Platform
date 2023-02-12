const mongoose = require("mongoose");

// This code will create a table/collection if table with that name does not exist
const UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "Please provide a Full Name!"],
        unique: false,
    },

    email: {
        type: String,
        required: [true, "Please provide an Email!"],
        unique: [true, "Email Exist"],
    },

    password: {
        type: String,
        required: [true, "Please provide a password!"],
        unique: false,
    },
});

module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);
