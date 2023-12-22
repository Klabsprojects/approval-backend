const jwt = require("jsonwebtoken");
const { ERRORS } = require("../helpers/httpMessages.helper");
let { commonErrorRes } = require("../middlewares/response.middleware");
var unless = require('express-unless');

let Jkey = process.env.JWT_SECRET_KEY;

const verifyToken = async (req, res, next) => {
    try {
        let bearerToken = req.headers['authorization'].split(' ')[1];
        if (!bearerToken) throw ERRORS.INVALID_TOKEN;
        // Verify JWT Token
        await jwt.verify(bearerToken, Jkey, (err, user) => {
            if (err) {
                return commonErrorRes(res, { statusCode: 401, message: ERRORS.INVALID_TOKEN });
            }
            req['user'] = user.data;
            next();
        });
    } catch (error) {
        return commonErrorRes(res, { statusCode: 401, message: ERRORS.INVALID_TOKEN });
    }
}

const createToken = async (data, expire) => {
    try {
        return (expire) ? jwt.sign(data, Jkey.toString(), { expiresIn: expire.toString() }) : jwt.sign(data, Jkey.toString())
    } catch (error) {
        throw { message: ERRORS.INVALID_TOKEN };
    }
}

verifyToken.unless = unless;

module.exports = { verifyToken, createToken }