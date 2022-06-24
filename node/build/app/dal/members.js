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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MembersDBHelper = void 0;
const members_model_1 = __importDefault(require("../models/members.model"));
const email_controller_1 = require("../utils/email.controller");
class MembersDBHelper {
    emailVerification(email, callBack) {
        return __awaiter(this, void 0, void 0, function* () {
            // console.log("email., ", email)
            let OtpCode = Math.round(Math.random() * 100000);
            yield (0, email_controller_1.sendOtp)(email, OtpCode, (err, result) => __awaiter(this, void 0, void 0, function* () {
                if (err) {
                    callBack({ error: "Network Error, Try again. " }, null);
                }
                else {
                    callBack(null, OtpCode);
                }
            }));
        });
    }
    createMembers(users, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            let member = new members_model_1.default(users);
            yield members_model_1.default.findOne({
                where: {
                    email: `${users.email}`
                }
            }).then((data) => {
                if (data) {
                    callback({ error: "User Already Exist" }, null);
                    return;
                }
                else {
                    member.save().then((res) => {
                        callback(null, data);
                        return;
                    }).catch((err) => {
                        console.log("DB ERROR ", err);
                        callback({ error: "Enter correct details" }, null);
                        return;
                    });
                }
            }).catch((err) => {
                console.log("returning error", err);
                callback({ error: "Network Error, Contact Admin" }, null);
                return;
            });
        });
    }
    membershipfee(users, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            yield members_model_1.default.update({ verify: true }, { where: { email: users.cartItems } }).then((data) => {
                if (data) {
                    console.log("membership fee data ", data);
                    callback(null, data);
                    return;
                }
                else {
                    console.log("Server erro");
                    callback({ error: "Server Error" }, null);
                }
            }).catch((err) => {
                console.log("Server error while making membership fee", err);
                callback({ error: "Server Error 2" }, null);
            });
        });
    }
    loginMembers(users, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            yield members_model_1.default.findOne({
                where: {
                    email: `${users.email}`,
                    verify: true,
                }
            }).then((data) => {
                if (data) {
                    callback(null, data);
                    return;
                }
                else {
                    callback({ error: "Kindly pay membership fee or Register" }, null);
                    return;
                }
            }).catch((err) => {
                console.log("returning error", err);
                callback({ error: "Network Error 2." }, null);
                return;
            });
        });
    }
}
exports.MembersDBHelper = MembersDBHelper;
