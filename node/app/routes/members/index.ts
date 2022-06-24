import { Request, Response } from "express";
import { MemebershipClass } from "../../controllers/members.controllers";

const MembersRoute = new MemebershipClass();

export class Routes {
    public route(app: any): void{ 
        app.route('/').get(MembersRoute.rootRoute)
        app.route('/login').get((req:Request, res:Response)=> res.render("login", {msg: ""}))
        app.route('/register').post(MembersRoute.Register);
        app.route('/verifyEmail').post(MembersRoute.EmailVerification);
        app.route('/membershipfee').post(MembersRoute.Membershipfee);
        app.route('/memberslogin').post(MembersRoute.Login);
    }
}
