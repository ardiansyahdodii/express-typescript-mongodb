import {userModel} from "../models/user.model";
import UserType from "../types/user.types";

export const createUser = async (payload: UserType) => {
    return await userModel
    .create(payload)
}