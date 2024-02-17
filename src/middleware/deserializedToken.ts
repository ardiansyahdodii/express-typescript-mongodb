import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt";

export const deserializeUser = async (req: Request, res: Response, next: NextFunction) => {
    const accessToken = req.headers.authorization?.replace(/^Bearer\s/, '')
    if (!accessToken) {
        return next()
    }

    const token = verifyToken(accessToken)
    
    if (token.decoded) {
        res.locals.user = token.decoded
        // console.log(res.locals.user);
        return next()
    } if (token.expired) {
        return next()
    }
    
    return next()
}