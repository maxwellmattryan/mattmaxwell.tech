const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const config = require("../config/database");

const adminSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;

module.exports.getFromUsername = (username, callback) => {
    const query = {username: username};
    Admin.findOne(query, callback);
};

module.exports.registerAdmin = (admin, callback) => {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(admin.password, salt, (err, hash) => {
            if(err) throw err;
            
            admin.password = hash;
            admin.save(callback);
        });
    });
};