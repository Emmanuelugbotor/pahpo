"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemebershipClass = void 0;
const members_1 = require("../dal/members");
const token_1 = require("../utils/token");
class MemebershipClass {
    constructor() {
        this.sql = new members_1.MembersDBHelper();
    }
    rootRoute(req, res) {
        return res.status(200).send({ domainName: 'papho.org', developer: "developer@papho.org" });
    }
    EmailVerification(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // console.log("fnding SQL ",  req.body.email)
            yield new members_1.MembersDBHelper().emailVerification(req.body.email, (err, data) => {
                err ? res.status(400).send(err) : res.status(200).send({ data: data });
            });
            // console.log("data: ", 4199)
            // res.status(200).send({data: 4199}) ;
        });
    }
    Register(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield new members_1.MembersDBHelper().createMembers(req.body, (err, data) => {
                err ? res.status(400).send(err) : res.status(200).send(data);
            });
        });
    }
    Membershipfee(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield new members_1.MembersDBHelper().membershipfee(req.body, (err, data) => {
                err ? res.status(400).send(err) : res.status(200).send(data);
            });
        });
    }
    Login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield new members_1.MembersDBHelper().loginMembers(req.body, (err, data) => {
                err ? res.status(400).send(err) : res.status(200).send({
                    id: data.dataValues.id,
                    full_name: data.dataValues.full_name,
                    email: data.dataValues.email,
                    phone: data.dataValues.phone,
                    country: data.dataValues.country,
                    occupation: data.dataValues.occupation,
                    verify: data.dataValues.verify,
                    areaOfInterest: data.dataValues.areaOfInterest,
                    createdAt: data.dataValues.createdAt,
                    token: (0, token_1.generateToken)(data.dataValues),
                });
            });
        });
    }
}
exports.MemebershipClass = MemebershipClass;
