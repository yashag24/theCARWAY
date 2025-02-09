import jwt from "jsonwebtoken";

const createNewToken = (payload) => {
    return jwt.sign({ userId: payload }, process.env.SECRET_KEY, { expiresIn: '10d' });
}

export default createNewToken;