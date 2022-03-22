const mongoose = require("mongoose");
const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    }
});

const schema = mongoose.model('role', ContactSchema);
module.exports = schema;