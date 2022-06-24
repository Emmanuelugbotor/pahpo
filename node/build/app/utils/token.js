"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
const jwt = require("jsonwebtoken");
const generateToken = (user) => {
    return jwt.sign({
        id: user.id,
        name: user.name,
        email: user.email
    }, "KNDKNR48375tfbnivngiukiuyw48ihvn", {
        expiresIn: '30d'
    });
};
exports.generateToken = generateToken;
exports.isAuth = (req, res, next) => {
    const authorization = req.headers.authorization;
    // console.log("Accessing authorization")
    // console.log("auth ", req.headers.authorization)
    // console.log("this  is the authorixation objs ", authorization);
    if (authorization) {
        const token = authorization.slice(7, authorization.length);
        // console.log("this is the token ", token);
        jwt.verify(token, "KNDKNR48375tfbnivngiukiuyw48ihvn", (err, decode) => {
            if (err) {
                res.status(401).send({ message: "Invalid Token" });
            }
            else {
                req.user = decode;
                next();
            }
        });
    }
    else {
        res.status(401).send({ message: "No Token" });
    }
};
