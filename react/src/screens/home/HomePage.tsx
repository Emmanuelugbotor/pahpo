import React, { useEffect, useState } from "react";
import Nav from "../../components/Navbar/navBar";
import NavHead from "../../components/NavBarHeading";
import Footer from "../../components/Footer/footer";
import AboutSection from "../../components/NavAboutContainer";
import img from "../../components/bg_slider.jpg";
import BenefitContainer from "../../components/BenefitContainer";
import ServiceContainer from "../../components/HomeServiceContainer";
import EmailForm from "../../components/emailform";
import "./HomePage.css";
import { MenuItems } from "src/components/menu";
import FooterComponent from "../../components/Footer/footer";
import NavBar from "../../components/Navbar/navBar";
import { Link } from "react-router-dom";
import Doctor from "src/components/doctorComponent/Doctor";
import SocialHeader from "src/components/Social/SocialHeader";
import VideoComp from "../VideoComp/VideoComp";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper'
import { Alert } from "react-bootstrap";

SwiperCore.use([Navigation, Pagination, Autoplay])


const HomePage = () => {

const [showAlert, setShowAlert] = useState(true);


 


  useEffect(()=>{
    setTimeout(()=>{
      window.alert(`Note: This website is under constant update and maintenance. We will update you when all functionality is fully operational. Thanks for your cooperation.`);
    }, 10000)
  }, []);

  return (
    <>
      <SocialHeader />
      <header className="header">
        <NavBar />
        {/* <MenuItems /> */}

        <div className="header_left">
          <h1>Pan African Health Professionals Organisation (PAHPO)</h1>
          <p>
            <span className="green">
              Pan African Health Professionals Organisation (PAHPO) i
            </span>
            s a Non-Profit/Non-Governmental Organisation established in March,
            2020 to bridge the gap between Africa healthcare systems and other
            continents through{" "}
            <span className="blue">
              advanced innovation, research, discovery
            </span>{" "}
            and{" "}
            <span className="red">unity among healthcare professionals</span>{" "}
            from African countries for the{" "}
            <span className="green">development of Africa.</span>
          </p>

          <Link style={{ textDecoration: "none" }} to="/membersregister">
            <button className="btn btn_member">
              <span> Become a Member </span>
            </button>
          </Link>
        </div>

        <div className="header_right">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            cssMode={true}
            mousewheel={true}
            keyboard={true}
            loop={true}
            navigation={true}
            autoplay={{
              delay: 10000,
            }}
            // pagination={true}
            // modules={[Navigation, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              {/* <img src="/images/slide1.jpeg" alt="PAHPO Image" /> */}
              <VideoComp />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/slide2.jpeg" alt="PAHPO Image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/slide3.jpeg" alt="PAHPO Image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/slide4.jpeg" alt="PAHPO Image" />
            </SwiperSlide>
          </Swiper>
        </div>
      </header>

      <section className="about">
        
        <div className="hide_in_laptop_view about_left">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            cssMode={true}
            mousewheel={true}
            keyboard={true}
            loop={true}
            navigation={true}
            autoplay={{
              delay: 15000,
            }}
            // pagination={true}
            // modules={[Navigation, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="/images/slide1.jpeg" alt="PAHPO Images" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/slide2.jpeg" alt="PAHPO Images" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/slide3.jpeg" alt="PAHPO Images" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/slide4.jpeg" alt="PAHPO Images" />
            </SwiperSlide>
          </Swiper>
          <Link
            style={{ textDecoration: "none" }}
            to="/partneregister"
            className=""
          >
            <button
              className="btn btn_member override_color"
              style={{ marginTop: "20px", width: "100%", color: "white" }}
            >
              <span> Become a Partner </span>
            </button>
          </Link>
        </div>

        <div className="about_left hide_in_mobile_view">
          <img src="/images/bg_about1.png" alt="" />
        </div>

        <div className="about_right">
          <h1>
            PA<span className="red">H</span>PO -Pan African{" "}
            <span className="red">Health</span> Professionals Organisation
          </h1>
          <p>
            Become a{" "}
            <span className="green">
              PA<span className="red">H</span>PO
            </span>{" "}
            partner and join the{" "}
            <span className="red">
              united front against poor healthcare delivery system
            </span>{" "}
            in Africa. United in advanced innovation, research and Discovery(A
            <span className="red">IRD</span>){" "}
            <span className="green"> for the development of Africa!.</span>{" "}
            <br /> Free registration !
          </p>

          <Link to="/partneregister" className="hide_in_mobile_view">
            <button className="btn white">Be a Partner</button>
          </Link>
        </div>
      </section>

      <section className="benefits">
        <div className="benefits_left">
          <h1 className="centered">
            <span className="green">PAHPO</span> MEMBERS / PARTNERS' BENEFITS
          </h1>
          <ul className="benefit_list">
            <li>
              <div className="image_benefits">
                <img src="/images/bg_icon1.png" alt="bg_icon" />
              </div>
              <h1>
                {" "}
                Advanced <span className="red">
                  Innovation, Research
                </span> and <span className="red">Discovery</span> (A
                <span className="red">IRD</span>)
              </h1>
              <p>
                Join our research team as a young or an experienced researcher.
                Are you an African origin living abroad or in Africa and you
                want to contribute to Africa development through innovation,
                research and discovery, then join our train of research team.
              </p>
              <p style={{ color: "rgb(51, 150, 255)" }}>
                "There is nothing without something", PAHPO Research Team.
              </p>
            </li>
            <li>
              <div className="image_benefits">
                <img src="/images/bg_icon1.png" alt="bg_icon" />
              </div>
              <h1>
                <span className="blue">Education - CourseMed</span> (Trainings &
                Mentorship Programs)
              </h1>
              <p>
                Covid-19 change our world forever. Enjoy up to 3 free online
                courses and physical training (professional development courses-
                PDC) eligible for Continuing Education Units, CEU every year as
                a member. These courses are accredited/approved by various
                medical bodies across African countries. That is, you can use
                the certificate acquire from PAHPO to renew your licenses every
                year and improve your career
              </p>
              <p style={{ color: "#3396ff" }}>
                Create an online course and receive passive income from PAHPO
                through CourseMed.
              </p>
            </li>
            <li>
              <div className="image_benefits">
                <img src="/images/bg_icon2.png" alt="bg_icon" />
              </div>
              <h1>
                <span className="red">TeleMed</span>
              </h1>
              <p>
                The future of medicine and emergency health response. Talk/chat
                with our medical experts for quick and emergency healthcare
                services from cities to remote areas across African countries.
                Free access to Telemed for all members.
              </p>
              <p style={{ color: "rgb(51, 150, 255)" }}>
                Join our medical and health experts to attend to patients online
                as volunteers or as paid
              </p>
            </li>
            <li>
              <div className="image_benefits">
                <img src="/images/bg_icon2.png" alt="bg_icon" />
              </div>
              <h1>Humanitarian Activities</h1>
              <p>
                Explore our heart of unlimited kindness to the poor and
                vulnerable through donations and emergency healthcare services
                across Africa. Join our medical and health team working on the
                frontline during natural disasters, disease outbreaks
                (epidemic), war, and other emergency humanitarian services
                either as paid or volunteer workers.
              </p>
            </li>

            <li>
              <div className="image_benefits">
                <img src="/images/bg_icon3.png" alt="bg_icon" />
              </div>
              <h1>
                <span className="red">Health</span> and{" "}
                <span className="blue">Peace</span>
              </h1>
              <p>
                Because of Africa's complex multi-ethnic nature, contemporary
                Africa abounds with problems related to ethnicity or tribalism.
                As healthcare personnel, we must play a neutral role to bring
                stable peace to Africa. Thus, use our neutral position to
                facilitate peace across regions and countries in Africa.
              </p>
            </li>

            <li>
              <div className="image_benefits">
                <img src="/images/bg_icon3.png" alt="bg_icon" />
              </div>
              <h1>
                <span className="red">Health</span> and{" "}
                <span className="blue">Earth</span>
              </h1>
              <p>
                A healthy environment promotes healthy living. Mother nature is
                evolving and several consequences are unfolding, from various
                forms of cancers to birth defects, global warming, and
                environmental disasters. It is high time we took action toward
                minimal and zero carbon emissions from the health sector thus
                facilitating the <span style={{ color: "green" }}>PA</span>
                <span className="red">H</span>
                <span style={{ color: "green" }}>PO</span>{" "}
                <span style={{ color: "green" }}> GreenHealth </span>{" "}
                <span style={{ color: "red" }}> initiative</span> .
              </p>
            </li>

            <li>
              <div className="image_benefits">
                <img src="/images/bg_icon4.png" alt="bg_icon" />
              </div>
              <h1>
                <span style={{ color: "#005d4b" }}> Traditional / Herbal </span>{" "}
                <span className="red">Medicine </span> -{" "}
                <span style={{ color: "#005d4b" }}>Ethnomedicine</span>
              </h1>
              <p>
                According to the World Health Organisation, 70–80% of Africans
                today depend either totally or partially on traditional or
                ethnomedicine.
              </p>

              <p>
                Integrating ancient wisdom and African traditional medicine with
                modern science for the health of people and the planet.
              </p>

              <p>
                As part of WHO’s overall traditional medicine strategy, it has a
                strategic focus on evidence and learning, data and analytics,
                sustainability and equity, and innovation and technology to
                optimize the contribution of traditional medicine to global
                health and sustainable development. At the same time, respect
                for local heritage, resources, and rights is a guiding principle
                - WHO
              </p>

              <p>
                <span style={{ color: "green" }}>PA</span>
                <span className="red">H</span>
                <span style={{ color: "green" }}>PO </span>
                will work closely with WHO, UN, Traditional doctors, and other
                relevant stakeholders around the world in achieving this dream
                together.
              </p>
            </li>

            <li>
              <div className="image_benefits">
                <img src="/images/bg_icon4.png" alt="bg_icon" />
              </div>
              <h1>
                Others e.g Drug Abuse, Gender Inequality, Healthcare
                Professionals Regularisation Vision2030.
              </h1>
              {/* <p>Be part of thee regulations of healthcare professional</p> */}
            </li>
          </ul>
        </div>
        <div className="benefits_right">
          <img src="/images/bg_benefitDelete.png" alt="" />
        </div>
      </section>

      <Doctor />
      <section className="services">
        <h1>Services Provided By PAHPO</h1>
        <p>Why should I join Pan African Health Professionals Organsation ?</p>
        <ul className="services_listing">
          <li>
            <div className="image_wrap">
              <img src="/images/bg_service.png" alt="" />
            </div>
            <h2>Advanced Innovation, Research and Discovery (AIRD)</h2>
            <p>
              Join our research team as a young or an experienced researcher.
              Are you an African origin living abroad or in Africa and you want
              to contribute to Africa development through innovation, research
              and discovery, then join our train of research team. "There is
              nothing without something", PAHPO Research Team.
            </p>
          </li>
          <li>
            <div className="image_wrap">
              <img src="/images/bg_service2.png" alt="" />
            </div>

            <h2>Humanitarian Activities</h2>
            <p>
              Explore our heart of unlimited kindness to the poor and vulnerable
              through donations and emergency healthcare services across Africa.
              Join our medical and health team working on the frontline during
              natural disasters, disease outbreaks (epidemic), war, and other
              emergency humanitarian services either as paid or volunteer
              workers.
            </p>
          </li>
          <li>
            <div className="image_wrap">
              <img src="/images/bg_service3.png" alt="" />
            </div>

            <h2>Education - CourseMed (Trainings & Mentorship Programs)</h2>
            <p>
              Covid-19 change our world forever. Enjoy up to 3 free online
              courses and physical training (professional development courses-
              PDC) eligible for Continuing Education Units, CEU every year as a
              member. These courses are accredited/approved by various medical
              bodies across African countries. That is, you can use the
              certificate acquire from PAHPO to renew your licenses every year
              and improve your career.
            </p>
            <p style={{ color: "#3396ff" }}>
              Create an online course and receive passive income from PAHPO
              through CourseMed.
            </p>
          </li>
        </ul>
        <div className="button_wrapper">
          <Link to="/services" className="view">
            <span className="first">View all Services</span>
          </Link>
        </div>
      </section>
      <section className="subscribe">
        <h1>Subscribe Now to Our Newsletter!</h1>
        <p>
          A team of expert doctors that are leading our clinic! Meet our staff
          and visit us for your next problem!
        </p>
        <div className="subscribe_box">
          <input type="text" />
          <button className="btn white">Subscribe</button>
        </div>
      </section>

      <FooterComponent />
    </>
  );
};

export default HomePage;
