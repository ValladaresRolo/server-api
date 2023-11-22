const mongoose = require('mongoose');

const catalogSchema = new mongoose.Schema({
    model: { type: String, required: true },
    brand: { type: String },
    year: { type: Number },
    price: { type: Number },
    ring: { type: [Number] },
    size: { type: [String] },
    description: { type: String },
    img: { type: String },
    sku: { type: String },
    category: { type: mongoose.ObjectId, ref: 'Category' }
})

const Catalog = mongoose.model('Catalog', catalogSchema)
module.exports = Catalog