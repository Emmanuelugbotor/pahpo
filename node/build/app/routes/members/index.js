"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const members_controllers_1 = require("../../controllers/members.controllers");
const MembersRoute = new members_controllers_1.MemebershipClass();
class Routes {
    route(app) {
        app.route('/').get(MembersRoute.rootRoute);
        app.route('/login').get((req, res) => res.render("login", { msg: "" }));
        app.route('/register').post(MembersRoute.Register);
        app.route('/verifyEmail').post(MembersRoute.EmailVerification);
        app.route('/membershipfee').post(MembersRoute.Membershipfee);
        app.route('/memberslogin').post(MembersRoute.Login);
    }
}
exports.Routes = Routes;
