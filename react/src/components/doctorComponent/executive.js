import React from "react";
import "./doctor.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "./docs.css";

SwiperCore.use([Navigation, Pagination]);

export default function Exexutive() {
  return (
    <>
      <div className="docs">
        <h1>PAHPO EXECUTIVES </h1>
      </div>

      <section className="doctors">
        <ul
          className="doctors_wrapper"
          style={{ flexWrap: "wrap", justifyContent: "center" }}
        >
          <li className="doctors_wrapper_item">
            <div className="image_container">
              <img src="/images/president.jpg" alt="doctor-1" />
              <div className="doctors_details">
                <p> Adewole Olakunle Tinws </p>
                <p> Acting President </p>
                <span>president@ahpo.org</span>
              </div>
            </div>
          </li>

          <li className="doctors_wrapper_item">
            <div className="image_container">
              <img src="/images/co-founder-3.jpg" alt="doctor-1" />
              <div className="doctors_details">
                <p> Mohammed Muftawu </p>
                <p> Vice President </p>
                <span>vice.president@ahpo.org</span>
              </div>
            </div>
          </li>

          <li className="doctors_wrapper_item">
            <div className="image_container">
              <img src="/images/co-founder.jpg" alt="doctor-1" />
              <div className="doctors_details">
                <p> Ojo Taiwo Abayomi </p>
                <p> Acting secretary </p>
                <span> secretary@ahpo.org </span>
              </div>
            </div>
          </li>

          <li className="doctors_wrapper_item">
            <div className="image_container">
              <img src="/images/co-founder_2.jpg" alt="doctor-1" />
              <div className="doctors_details">
                <p>Chama Tainada Harmis</p>
                <p> Financial secretary</p>
                <span>chama.tainada@ahpo.org</span>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
}
