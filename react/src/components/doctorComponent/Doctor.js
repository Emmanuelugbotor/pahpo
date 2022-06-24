import React from "react";
import "./doctor.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { Navigation, Pagination } from "swiper";
SwiperCore.use([Navigation, Pagination]);

export default function Doctor() {
  return (
    <>
      <div className="docs">
        <h1>
          Guest Lecturers / A<span style={{ color: "red" }}>IRD</span> TEAM
        </h1>
        <p className="main_text">
          Meet our team of experts healthcare professionals and researchers that
          started the <span style={{ color: "green" }}>PA</span>
          <span className="red">H</span>
          <span style={{ color: "green" }}>PO</span> vision
        </p>
      </div>

      <section className="doctors hide_in_mobile_view">
        <ul className="doctors_wrapper">
          <Swiper
            slidesPerView={2}
            spaceBetween={10}
            cssMode={true}
            mousewheel={true}
            keyboard={true}
            // loop={true}
            navigation={true}
            // pagination={true}
            // modules={[Navigation, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <li className="doctors_wrapper_item">
                <div className="image_container">
                  <img src="/images/fdoctors1.jpeg" alt="doctor-1" />
                  <div className="doctors_details">
                    <p>Beckie Tagbo</p>
                    <p>
                      Professor of Paediatrics, Child Health & Vaccinology.{" "}
                    </p>
                    <span>tagbo.beckie@pahpo.org</span>
                  </div>
                </div>
              </li>
            </SwiperSlide>

            <SwiperSlide>
              <li className="doctors_wrapper_item">
                <div className="image_container">
                  <img src="/images/fdoctors2.jpeg" alt="doctor-1" />
                  <div className="doctors_details">
                    <p>Oyedunni Arulogun</p>
                    <p> Professor of Health Promotion and Education.</p>
                    <span>oyedunni.arulogun@pahpo.org</span>
                  </div>
                </div>
              </li>
            </SwiperSlide>

            <SwiperSlide>
              <li className="doctors_wrapper_item">
                <div className="image_container">
                  <img src="/images/fdoctors3.jpeg" alt="doctor-1" />
                  <div className="doctors_details">
                    <p>Anga Fatima</p>
                    <p>Medical Doctor.</p>
                    <span>anga.fatima@pahpo.org</span>
                  </div>
                </div>
              </li>
            </SwiperSlide>

            <SwiperSlide>
              <li className="doctors_wrapper_item">
                <div className="image_container">
                  <img src="/images/doctor_1.jpeg" alt="doctor-1" />
                  <div className="doctors_details">
                    <p>Abayomi Ajewole</p>
                    <p>Dentist </p>
                    <span>abayomi.ajewole@ahpo.orgg</span>
                  </div>
                </div>
              </li>
            </SwiperSlide>

            <SwiperSlide>
              <li className="doctors_wrapper_item">
                <div className="image_container">
                  <img src="/images/doctor_2.jpg" alt="doctor-1" />
                  <div className="doctors_details">
                    <p>Rufai Ajibola</p>
                    <p>Sonographer</p>
                    <span>rufai.ajibola@ahpo.org</span>
                  </div>
                </div>
              </li>
            </SwiperSlide>

            <SwiperSlide>
              <li className="doctors_wrapper_item">
                <div className="image_container">
                  <img src="/images/co-founder.jpg" alt="doctor-1" />
                  <div className="doctors_details">
                    <p>Ojo Taiwo Abayomi</p>
                    <p>Secretary</p>
                    <span>secretary@ahpo.org</span>
                  </div>
                </div>
              </li>
            </SwiperSlide>

            <SwiperSlide>
              <li className="doctors_wrapper_item">
                <div className="image_container">
                  <img src="/images/doctor_4.jpg" alt="doctor-1" />
                  <div className="doctors_details">
                    <p> Chidiogo Okafor</p>
                    <p> Medical Doctor </p>
                    <span>chidiogo.okafor@ahpo.org</span>
                  </div>
                </div>
              </li>
            </SwiperSlide>

            <SwiperSlide>
              <li className="doctors_wrapper_item">
                <div className="image_container">
                  <img src="/images/doctor_5.jpg" alt="doctor-1" />
                  <div className="doctors_details">
                    <p>Adewale Oke </p>
                    <p> Medical Lab Scientist </p>
                    <span>adewale.oke@ahpo.org</span>
                  </div>
                </div>
              </li>
            </SwiperSlide>
          </Swiper>
        </ul>
      </section>

      <section className="doctors hide_in_laptop_view">
        <ul className="doctors_wrapper">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            cssMode={true}
            mousewheel={true}
            keyboard={true}
            // loop={true}
            navigation={true}
            // pagination={true}
            // modules={[Navigation, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <li className="doctors_wrapper_item">
                <div className="image_container">
                  <img src="/images/fdoctors1.jpeg" alt="doctor-1" />
                  <div className="doctors_details">
                    <p>Beckie Tagbo</p>
                    <p>
                      Professor of Paediatrics, Child Health & Vaccinology.{" "}
                    </p>
                    <span>tagbo.beckie@pahpo.org</span>
                  </div>
                </div>
              </li>
            </SwiperSlide>

            <SwiperSlide>
              <li className="doctors_wrapper_item">
                <div className="image_container">
                  <img src="/images/fdoctors2.jpeg" alt="doctor-1" />
                  <div className="doctors_details">
                    <p>Oyedunni Arulogun</p>
                    <p> Professor of Health Promotion and Education.</p>
                    <span>oyedunni.arulogun@pahpo.org</span>
                  </div>
                </div>
              </li>
            </SwiperSlide>

            <SwiperSlide>
              <li className="doctors_wrapper_item">
                <div className="image_container">
                  <img src="/images/fdoctors3.jpeg" alt="doctor-1" />
                  <div className="doctors_details">
                    <p>Anga Fatima</p>
                    <p>Medical Doctor.</p>
                    <span>anga.fatima@pahpo.org</span>
                  </div>
                </div>
              </li>
            </SwiperSlide>

            <SwiperSlide>
              <li className="doctors_wrapper_item">
                <div className="image_container">
                  <img src="/images/doctor_1.jpeg" alt="doctor-1" />
                  <div className="doctors_details">
                    <p>Abayomi Ajewole</p>
                    <p>Dentist </p>
                    <span>abayomi.ajewole@ahpo.orgg</span>
                  </div>
                </div>
              </li>
            </SwiperSlide>

            <SwiperSlide>
              <li className="doctors_wrapper_item">
                <div className="image_container">
                  <img src="/images/doctor_2.jpg" alt="doctor-1" />
                  <div className="doctors_details">
                    <p>Rufai Ajibola</p>
                    <p>Sonographer</p>
                    <span>rufai.ajibola@ahpo.org</span>
                  </div>
                </div>
              </li>
            </SwiperSlide>

            <SwiperSlide>
              <li className="doctors_wrapper_item">
                <div className="image_container">
                  <img src="/images/co-founder.jpg" alt="doctor-1" />
                  <div className="doctors_details">
                    <p>Ojo Taiwo Abayomi</p>
                    <p>Secretary</p>
                    <span>secretary@ahpo.org</span>
                  </div>
                </div>
              </li>
            </SwiperSlide>

            <SwiperSlide>
              <li className="doctors_wrapper_item">
                <div className="image_container">
                  <img src="/images/doctor_4.jpg" alt="doctor-1" />
                  <div className="doctors_details">
                    <p> Chidiogo Okafor</p>
                    <p> Medical Doctor </p>
                    <span>chidiogo.okafor@ahpo.org</span>
                  </div>
                </div>
              </li>
            </SwiperSlide>

            <SwiperSlide>
              <li className="doctors_wrapper_item">
                <div className="image_container">
                  <img src="/images/doctor_5.jpg" alt="doctor-1" />
                  <div className="doctors_details">
                    <p>Adewale Oke </p>
                    <p> Medical Lab Scientist </p>
                    <span>adewale.oke@ahpo.org</span>
                  </div>
                </div>
              </li>
            </SwiperSlide>
          </Swiper>
        </ul>
      </section>
    </>
  );
}
