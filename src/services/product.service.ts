import { productModel } from "../models/product.model";

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