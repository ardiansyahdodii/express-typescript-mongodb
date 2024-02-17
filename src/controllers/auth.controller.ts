import { Request, Response } from "express";
import { v4 as uuidv4 } from 'uuid';
import { createSessionValidation, registerUserValidation } from "../validations/auth.validation";
import { createUser, findUserByEmail } from "../services/auth.service";
import { checkPassword, hashing } from "../utils/hashing";
// import UserType from "../types/user.types";
import { signJWT } from "../utils/jwt";

export const registerUser = async (req: Request, res: Response) => {
    req.body.user_id = uuidv4()
    const { error, value } = registerUserValidation(req.body)

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

export const createSession = async (req: Request, res: Response) => {
    const { error, value } = createSessionValidation(req.body)

    if (error) {
        return res.status(422).json({
            status: false,
            statusCode: 422,
            message: error
        })
    }
    try {
        const user: any = await findUserByEmail(value.email)
        const isValid = checkPassword(value.password, user.password)
        if (!isValid) {
            return res.status(401).json({
                status: false,
                statusCode: 401,
                message: 'Invalid email or password'
            })
        }
        const accessToken = signJWT({
            ...user
        }, {
            expiresIn: '1d'
        })

        return res.status(200).json({
            status: true,
            statusCode: 200,
            message: 'Login success',
            data: {
                accessToken
            }
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            status: false,
            statusCode: 500,
            message: error
        })
    }

}