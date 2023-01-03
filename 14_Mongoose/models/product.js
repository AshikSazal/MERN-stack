const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true}
});

// 'Product' => 'products' table name
module.exports = mongoose.model('Product', productSchema);