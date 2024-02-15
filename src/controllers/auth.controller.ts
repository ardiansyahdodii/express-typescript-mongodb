import { Request, Response } from "express";
import { v4 as uuidv4 } from 'uuid';
import { registerUserSchema } from "../validations/auth.validation";
import { createUser } from "../services/auth.service";
import { hashing } from "../utils/hashing";

export const registerUser = async (req: Request, res: Response) => {
    req.body.user_id = uuidv4()
    const { error, value } = registerUserSchema(req.body)

    if (error) {
        return res.status(422).json({
            status: false,
            statusCode: 422,
            message: error
        })
    }
    try {
        value.password = `${hashing(value.password)}`
        await createUser(value)
        return res.status(201).json({
            status: true,
            statusCode: 201,
            message: 'User created'
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            statusCode: 500,
            message: error
        })
    }
}