const mongoose = require('mongoose');

// Category Schema
const categorySchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },   // Name of the category
    imgSrc: { type: String, required: true },                 // URL for category image
    description: { type: String }, 
    discount: {type:String}                       // Optional description for the category
}, { timestamps: true }); // Add timestamps (createdAt, updatedAt)

module.exports = mongoose.model('Category', categorySchema);
