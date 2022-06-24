import { useState } from "react";
import { MenuItems } from "src/components/menu";
import "./register.css";

export const MemberShipLoginPage = () => {
  const [full_name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telegram, setTelegram] = useState("");
  const [whatsApp, setWhatsApp] = useState("");
  const [phone, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [occupation, setOccupation] = useState("");
  const [education, setEducation] = useState("");
  const [areaOfInterest, setAreaOfInterest] = useState("");
  const [serostatus, setSerostatus] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [gender, setGender] = useState("");
  const [sexualOrientation, setSexualOrientation] = useState("");
  const [password, setPassword] = useState("");
  const [showLoader, setShowLoader] = useState(true);
  return (
    <>
      <div className="header_registration">
        <MenuItems />

        <h2>Join PahPo</h2>
      </div>
      <div className="form_main">
        <div className="register">
          <div className="register_notch">Membership Register</div>
          <form action="">
            <div className="form_wrapper">
              <div className="form_field">
                <label htmlFor="">Full Name</label>
                <input
                  type="text"
                  placeholder="LastName FirstName Others"
                  name="full_name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="form_wrapper">
              <div className="form_field">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="enter email address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form_field">
                <label htmlFor=""> Telegram ID</label>
                <input
                  type="text"
                  placeholder=" enter your telegram id"
                  onChange={(e) => setTelegram(e.target.value)}
                />
              </div>
            </div>

            <div className="form_wrapper">
              <div className="form_field">
                <label htmlFor="">WhatsApp Number</label>
                <input
                  type="text"
                  placeholder="enter your whatsapp number"
                  onChange={(e) => setWhatsApp(e.target.value)}
                />
              </div>
              <div className="form_field">
                <label htmlFor="">Phone Number</label>
                <input
                  type="text"
                  placeholder="enter your phone number"
                  name="phone"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            </div>

            <div className="form_wrapper">
              <div className="form_field">
                <label>Country</label>
                <select
                  id="conutries"
                  style={{ width: "100%" }}
                  name="country"
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <option selected></option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="form_field">
                <label htmlFor="conutries" className="form-label">
                  Profession/Occupation
                </label>
                         
                <select
                  id="conutries"
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                  style={{ width: "100%" }}
                  name="occupation"
                  onChange={(e) => setOccupation(e.target.value)}
                >
                  <option selected></option>
                  <option value="Anatomist">Anatomist</option>
                  <option value="Biochemist ">Biochemist</option>
                  <option value="Community Health Worker">
                    Community Health Worker
                  </option>
                  <option value="Dental Technologist/Technician">
                    Dental Technologist/Technician
                  </option>
                  <option value="Dentist "> Dentist </option>
                  <option value="Dentist "> Dietician </option>

                  <option value="Environmental Health Scientist">
                    Environmental Health Scientist
                  </option>

                  <option value="Health Information Management">
                    Health Information Management
                  </option>

                  <option value="Media/Medical Journalist ">
                    Media/Medical Journalist
                  </option>
                  <option value="Medical Doctor">Medical Doctor </option>
                  <option
                    value="Medical Laboratory Scientist/Technologist or Biomedical
                      Scientist or Laboratory Medicine"
                  >
                    Medical Laboratory Scientist/Technologist or Biomedical
                    Scientist or Laboratory Medicine
                  </option>
                  <option value="Medical Laboratory Technician">
                    Medical Laboratory Technician
                  </option>
                  <option value="Non-Health Actors">Non-Health Actors</option>
                  <option value="Nurse">Nurse </option>
                  <option value="Other Healthcare Worker">
                    Other Healthcare Worker
                  </option>
                  <option value="Optometrist"> Optometrist </option>
                  <option value="Orthotit and Prosthetist">
                    Orthotit and Prosthetist
                  </option>
                  <option value="Pharmacist"> Pharmacist</option>
                  <option value="Physiology">Physiology</option>
                  <option value="Physiotherapist">Physiotherapist </option>
                  <option value="Public Health Officers">
                    Public Health Officers
                  </option>
                  <option value="Radiographer">Radiographer</option>
                  <option value="Social Worker">Social Worker</option>
                  <option value="Science Laboratory Technologist">
                    Science Laboratory Technologist
                  </option>
                  <option value="Sonographer">Sonographer</option>
                  <option value="Trado-Medical Practioner">
                    Trado-Medical Practioner
                  </option>
                  <option value="Veterinary Doctor">Veterinary Doctor</option>
                  <option value="Others">Others </option>
                </select>
              </div>
            </div>

            <div className="form_wrapper">
              <div className="form_field">
                <label htmlFor="conutries" className="form-label">
                  Education Level
                </label>
                <br />

                <select
                  style={{ width: "100%" }}
                  onChange={(e) => setEducation(e.target.value)}
                >
                  <option selected></option>
                  <option value="Undergraduate">Undergraduate</option>
                  <option value="Master">Master</option>
                  <option value="Doctorate">Doctorate</option>
                </select>
              </div>
              <div className="form_field">
                <label htmlFor="conutries" className="form-label">
                  Area of Interest
                </label>
                <select
                  id="conutries"
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                  style={{ width: "100%" }}
                  required
                  onChange={(e) => setAreaOfInterest(e.target.value)}
                >
                  <option selected></option>
                  <option value="Research/Discovery ">
                    Research/Discovery
                  </option>
                  <option value="Humanitarian Activities">
                    Humanitarian Activities
                  </option>
                  <option value="Health and Peace">Health and Peace</option>
                  <option value="Health and Climate Change">
                    Health and Climate Change
                  </option>
                  <option
                    value="Education (Course content creator, Medical Training,
                      Online Course)"
                  >
                    Education (Course content creator, Medical Training, Online
                    Course)
                  </option>
                </select>
              </div>
            </div>

            <div className="form_wrapper">
              <div className="form_field">
                <label className="form-label">Serostatus</label>
                <br />
                <select
                  id="conutries"
                  required
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                  style={{ width: "100%" }}
                  onChange={(e) => setSerostatus(e.target.value)}
                >
                  <option selected></option>
                  <option value="HIV+">HIV+</option>
                  <option value="HIV-">HIV-</option>
                  <option value="Prefer not to speak">
                    Prefer not to speak
                  </option>
                </select>
              </div>
              <div className="form_field">
                <label className="form-label">Blood Group</label>
                <br />
                <select
                  id="conutries"
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                  style={{ width: "100%" }}
                  onChange={(e) => setBloodGroup(e.target.value)}
                >
                  <option selected></option>
                  <option value="O Rh +ve">O Rh +ve</option>
                  <option value="A Rh +ve">A Rh +ve</option>
                  <option value="B Rh +ve">B Rh +ve</option>
                  <option value="AB Rh +ve">AB Rh +ve</option>
                  <option value="O Rh +ve">O Rh -ve</option>
                  <option value="A Rh +ve">A Rh -ve</option>
                  <option value="B Rh +ve">B Rh -ve</option>
                  <option value="AB Rh +ve">AB Rh -ve</option>
                </select>
              </div>
            </div>

            <div className="form_wrapper">
              <div className="form_field">
                <label className="form-label">Gender</label>
                <br />
                <select
                  id="conutries"
                  style={{ width: "100%" }}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option selected></option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Transgender Female">Transgender Female</option>
                  <option value="Transgender Male">Transgender Male </option>
                  <option value="Gender non-conforming">
                    Gender non-conforming
                  </option>
                  <option value="Not listed/Prefer not to answer">
                    Not listed/Prefer not to answer
                  </option>
                </select>
              </div>
              <div className="form_field">
                <label>Sexual Orientation</label>
                <br />
                <select
                  id="conutries"
                  style={{ width: "100%" }}
                  onChange={(e) => setSexualOrientation(e.target.value)}
                >
                  <option selected></option>
                  <option value="Gay or lesbian">Gay or lesbian</option>
                  <option value="Heterosexual">Heterosexual</option>
                  <option value="Bisexual">Bisexual</option>
                  <option value="Prefer not to speak">
                    Prefer not to speak
                  </option>
                </select>
              </div>
            </div>
            <div className="form_wrapper">
              <div className="form_field">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="*******************"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="form_wrapper">
              <div className="form_field">
                <input type="submit" value="Register" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
