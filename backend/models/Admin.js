const mongoose = require("mongoose")
const Schema  = mongoose.Schema

const AdminSchema = new Schema({
        first_namead6: {
            type: String,
            required: true
        },

        last_namead6: {
            type: String,
            required: true
        },

        emailad6: {
            type: String,
            required: true,
            unique: true
        },

        passwordad6: {
            type: String,
            required: true
        },

        datead6: {
            type: Date,
            default: Date.now
        }
    },
    {
        timestamps: true
    });

const Admin = mongoose.model('admins', AdminSchema);

module.exports = Admin;


