const mongoose = require('mongoose');

const camperSchema = new mongoose.Schema({
    firstName: { type: String, required: true},
    lastName: { type: String, required: true},
    emergencyContact: { type: String, required: true},
    campground: { type: String, required: true}
});

module.exports = mongoose.model('Camper', camperSchema, 'Camper');