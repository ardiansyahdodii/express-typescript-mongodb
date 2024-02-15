import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    product_id: {
        type: String,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
    },
    variant: {
        type: String
    }
},
    { timestamps: true }
)

export const productModel = mongoose.model('product', productSchema)