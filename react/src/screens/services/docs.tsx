import { MenuItems } from "src/components/menu";
import FooterComponent from "../../components/Footer/footer";
import NavBar from "../../components/Navbar/navBar";
import Doctor from '../../components/doctorComponent/painiors'
import Executives from '../../components/doctorComponent/executive'
import "./services.css";

export const DocPioneers = () => {

  return (
    <>
      <div className="header_registration">
        
        <NavBar />
        <h2> PAHPO PIONEERS  </h2>
      </div>

      <Doctor />
      <FooterComponent />
    </>
  );
};

export const DocExecutives = () => {
  return (
    <>
      <div className="header_registration">
        <NavBar />
        <h2> PAHPO EXECUTIVES  </h2>
      </div>

      <Executives />
      <FooterComponent />
    </>
  );
};