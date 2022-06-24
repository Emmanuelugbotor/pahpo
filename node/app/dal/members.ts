import User from "../models/members.model";
import { sendOtp } from '../utils/email.controller'

export class MembersDBHelper {

    public async emailVerification(email: string, callBack: any) {
        // console.log("email., ", email)
        let OtpCode: number = Math.round(Math.random() * 100000);
        await sendOtp(email, OtpCode, async (err: Error, result: any) => {
            if(err){
                callBack({ error: "Network Error, Try again. " }, null);
            }else{
                callBack( null, OtpCode);
            }
        })
    }

    async createMembers(users: any, callback: any) {

        
        let member = new User(users);
        await User.findOne({
            where: {
                email: `${users.email}`
            }
        }).then((data) => {
            if (data) {
                callback({ error: "User Already Exist" }, null);
                return; 
            } else { 
                member.save().then((res) => {
                    callback(null, data) 
                    return;
                }).catch((err) => {
                    console.log("DB ERROR ", err)
                    callback({ error: "Enter correct details" }, null);
                    return;
                });
            } 
        }).catch((err) => {
            console.log("returning error", err)
            callback({ error: "Network Error, Contact Admin" }, null);
            return;
        })
    }

    async membershipfee(users: any, callback: any) {
        await User.update(
            { verify: true },
            { where: { email: users.cartItems } }
        ).then((data) => {
            if (data) {
                console.log("membership fee data ", data)
                callback(null, data);
                return;
            } else {
                console.log("Server erro")
                callback({ error: "Server Error" }, null);
            }
        }).catch((err) => {
            console.log("Server error while making membership fee", err)
            callback({ error: "Server Error 2" }, null);
        })
    }

    async loginMembers(users: any, callback: any) {

        await User.findOne({
            where: {
                email: `${users.email}`,
                verify: true,
            }
        }).then((data) => {
            if (data) {

                callback(null, data);
                return;
            } else {
                callback({ error: "Kindly pay membership fee or Register" }, null);
                return;
            }
        }).catch((err) => {
            console.log("returning error", err)
            callback({ error: "Network Error 2." }, null);
            return;
        });
    }


}