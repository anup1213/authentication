import JWT from 'jsonwebtoken'


interface UserTokenPayload {
    id: String,

}

const JWT_SECRET = 'hfoivshdfvaoisdj'

export function createUserToken(payload: UserTokenPayload) {
    const token = JWT.sign(payload, JWT_SECRET)
    return token;
}

export function verifyUserToken(token: string) {
    try {
        const payload = JWT.verify(token, JWT_SECRET) as UserTokenPayload
        return payload
    } catch (error) {
        return null
    }
}