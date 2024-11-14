const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: String,
    imgSrc: String,
    price: String,
    numericPrice: [Number],
    rating: Number,
    description: String,
    seller: String,
    origin: String,
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    availability: String,
    weight: String,
});
module.exports = mongoose.model('Product', productSchema);