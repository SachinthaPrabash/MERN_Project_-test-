const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({

    productName: { type: String, required: true },
    stock: { type: Number, required: true },
    active: { type: String, required: true },
    productImage: { type: String, default: '' }
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;

