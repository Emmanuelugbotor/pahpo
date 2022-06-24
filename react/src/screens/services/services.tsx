import { MenuItems } from "src/components/menu";
import FooterComponent from "../../components/Footer/footer";
import NavBar from "../../components/Navbar/navBar";

import "./services.css"

export const ServicesPage = () => {
  return (
    <>
      <div className="header_registration">
        {/* <MenuItems /> */} 
        <NavBar /> 
        <h2> PAHPO SERVICES </h2>
      </div>
      <section className="services-main">
        <ul className="services_listing">
          <li>
            <div className="image_wrap">
              <img src="/images/bg_service.png" alt="" />
            </div>
            <h2>Research, Innovation and Discovery</h2>
          </li>
          <li>
            <div className="image_wrap">
              <img src="/images/bg_serve.png" alt="" />
            </div>
            <h2>Humanitarian Activities and Event</h2>
          </li>
          <li>
            <div className="image_wrap">
              <img src="/images/cardiology.jpg" alt="" />
            </div>

            <h2>Health and Peace</h2>
          </li>
          <li>
            <div className="image_wrap">
              <img src="/images/bg_service3.png" alt="" />
            </div>

            <h2>Health and Climate Change</h2>
          </li>
          <li>
            <div className="image_wrap">
              <img src="/images/bg_service.png" alt="" />
            </div>

            <h2>Healthcare Professional Regulation</h2>
          </li>
          <li>
            <div className="image_wrap">
              <img src="/images/bg_service.png" alt="" />
            </div>

            <h2>CourseMed</h2>
          </li>
          <li>
            <div className="image_wrap">
              <img src="/images/bg_service.png" alt="" />
            </div>

            <h2>TeleMed</h2>
          </li>
        </ul>
      </section>
      <FooterComponent />
    </>
  );
};
