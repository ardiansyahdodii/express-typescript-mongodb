import jwt from 'jsonwebtoken'
import { CONFIG } from '../config/environment'

export const signJWT = (payload: Object, options?: jwt.SignOptions | undefined) => {
    return jwt.sign(payload, `${CONFIG.jwt_secret}`, {
        ...(options && options)
    })
}

export const verifyToken = (token: string) => {
    try {
        const decoded = jwt.verify(token, `${CONFIG.jwt_secret}`)
        return {
            valid: true,
            expired: false,
            decoded
        }
    } catch (error: any) {
        return {
            valid: false,
            expired: error.message === 'jwt expired',
            decoded: null
        }
    }
}