const jwt = require('jsonwebtoken')
const userModel = require('../model/userModel');

const auth = async function (req, res, next) {
    try {
        const token = req.cookies.auth;
        if (token) {
            const decodeToken = jwt.verify(token, "secret-key");


            const emailRes = await userSchema.findOne({ _id: decodeToken.userId });
            let time = Math.floor(Date.now() / 1000)
            if (decodeToken.exp < time) {
                return res.status(401).send({ status: false, msg: "token is expired,please login again" });
            }
            if (!emailRes) {
                return res.status(401).send({ status: false, message: 'Unauthenticated' });
            }
            next();
        }
    }
    catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
}

module.exports.auth=auth