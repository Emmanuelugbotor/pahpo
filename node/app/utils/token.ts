const jwt = require("jsonwebtoken");
import { Request, Response, NextFunction } from "express";


export const generateToken=(user:any)=>{
    return jwt.sign({
        id: user.id,
        name: user.name,
        email: user.email
    }, 
        "KNDKNR48375tfbnivngiukiuyw48ihvn",
        {
            expiresIn: '30d'
        }
    )
}

exports.isAuth=(req:Request, res:Response, next:NextFunction)=>{
    const authorization =  req.headers.authorization;
    // console.log("Accessing authorization")
    // console.log("auth ", req.headers.authorization)

    // console.log("this  is the authorixation objs ", authorization);

    if(authorization){
        const token = authorization.slice(7, authorization.length);
        // console.log("this is the token ", token);
        jwt.verify(token, "KNDKNR48375tfbnivngiukiuyw48ihvn", (err:Error, decode:any)=>{
            if(err){
                res.status(401).send({message: "Invalid Token"})
            }else{
                req.user = decode;
                next();
            }
        })
    }else{
        res.status(401).send({message: "No Token"});
    }
}