import HomePage from "../screens/home/HomePage";
import AboutPage from '../screens/AboutPage';
import { ServicesPage } from '../screens/services/services';
import MemberShipLoginPage from '../screens/members/login';
import MemberShipRegisterPage from "../screens/members/oldRegister";
import PartnerRegisterPage from '../screens/partners/regWrapper'
import { MembersDashboard } from "src/screens/members/dashboard";
import { DocPioneers, DocExecutives } from "../screens/services/docs";
import VideoComp from "src/screens/VideoComp/VideoComp";


export const publicRoutes = {
  // Public Routes
  HomePage: {
    path: "/",
    exact: true,
    component: HomePage,
  },
  AboutPage: {
    path: "/about",
    component: AboutPage,
  },
  ServicesPage: {
    path: "/services",
    component: ServicesPage,
  },
  VideoPage: {
    path: "/video",
    component: VideoComp,
  },
  MemebershipLogin: {
    path: "/login",
    component: MemberShipLoginPage,
  },
  MemebershipRegister: {
    path: "/membersregister",
    component: MemberShipRegisterPage,
  },
  PartnerReg: {
    path: "/partneregister",
    component: PartnerRegisterPage,
  },
  Pioneers: {
    path: "/pioneers",
    component: DocPioneers,
  },
  Executive: {
    path: "/executive",
    component: DocExecutives,
  },
};

export const privateRoutes = {
    MembersDashboard : {
        path: "/dashboard",
        component: MembersDashboard
    }
}


