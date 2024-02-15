import { productModel } from "../models/product.model";
import ProductType from "../types/product.types";


export const addProductToDB = async (payload: ProductType) => {
    return await productModel
        .create(payload)
        .then((data) => {
            return data
            // console.log(data);
        })
        .catch((error) => {
            console.log(error);
        })
}
export const getProductFromDB = async () => {
    return await productModel
        .find()
        .then((data) => {
            return data
            // console.log(data);
        })
        .catch((error) => {
            console.log(error);
        })
}

export const getProductFromDBById = async (id: String) => {
    return await productModel
        .findOne({ product_id: id })
}