import bcrypt from 'bcrypt'

export const hashing = (password: string) => {
    return bcrypt.hashSync(password, 10)
}

export const checkPassword = (password: string, hashedPassword: string) => {
    return bcrypt.compareSync(password, hashedPassword)
}