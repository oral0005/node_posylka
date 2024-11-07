// models/Item.js
const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema(
    {
        from: { type: String, required: true },
        to: { type: String, required: true },
        time: { type: Date, required: true },
        price: { type: Number, required: true },
        description: String,
        quantity: { type: Number, default: 0 },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Item', itemSchema);
