import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signin, register } from "../../redux/actions/usersAction";
import "../../App.css";
import axios from "axios";
import { Redirect, useHistory, Link } from "react-router-dom";
import url from "src/constant/url";
import { usePost, postData } from "src/utils/useFetch";
import { useSnackbar } from "notistack";
import { Circles } from "react-loader-spinner";
import { useFlutterwave } from "flutterwave-react-v3";
import { createOrder, membershipPayment } from "src/redux/actions/orderActions";
import { countries } from "src/utils/countries";
import Select from 'react-select';
import makeAnimate from 'react-select/animated'
import { data } from '../../utils/algorithms'


const animatedComponents = makeAnimate();

const RegisterComponent = (props) => {

  let dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  let history = useHistory();
  const userSignin = useSelector((state) => state.userSignIn);
  const userRegister = useSelector((state) => state.userRegister);
  let orderCreate = useSelector((state) => state.orderCreate);
  let { order, orderErr, orderSuccess } = orderCreate;

  // const { userInfo, loading, error, success } = userSignin;
  const { userInfo, success } = userSignin;
  const { reguserInfo, regloading, regerror, regsuccess } = userRegister;

  const [full_name, setName] = useState("");
  const [email, setEmail] = useState();
  const [whatsApp, setWhatsApp] = useState("");
  const [eduStatus, setEduStatus] = useState("Student");
  const [country, setCountry] = useState("Nigeria");
  const [occupation, setOccupation] = useState("Activist");
  const [orgType, setOrgType] = useState("  Hospital/clinic");
  const [education, setEducation] = useState("Undergraduate");
  const [areaOfInterest, setAreaOfInterest] = useState(
    "Advanced Innovation, Research and Discovery"
  );
  const [serostatus, setSerostatus] = useState("HIV+");
  const [bloodGroup, setBloodGroup] = useState("O Rh +ve");
  const [gender, setGender] = useState("Male");
  const [sexualOrientation, setSexualOrientation] = useState("Gay or lesbian");
  const [vulnerableOption, setVulnerableOption] = useState("Men who have sex with men");
  const [password, setPassword] = useState("");
  const [comfirmPassword, setComfirm] = useState("");
  const [residence, setResidence] = useState("Nigeria");
  const [showLoader, setShowLoader] = useState(true);
  const [Otp, setOtp] = useState(0);
  const [OtpSent, setSentOtp] = useState(0);

  const [dob, setDob] = useState("");

                    
  const AreaOfInterest=(val)=>{
    let values = new String();
    if(val.length){
      val.forEach((items, index) => {
        values += `${items.value} + `;
        
      });
      
    }
    setAreaOfInterest(values);

  }

  const config = {
    public_key: "FLWPUBK_TEST-c2c93645ec804dcafa80ccaf15bb4acd-X",
    tx_ref: Date.now(),
    amount: eduStatus == "Student" ? 10 : 20,
    currency: "USD",
    payment_options: "card, ussd, bank",
    customer: {
      email: email,
      phone_number: whatsApp, 
      name: full_name,
    },

    // meta:{
    //   ShippingAddress: ShippingAddress
    // },

    customizations: {
      title: "PAPHO MEMBERSHIP PAYMENT",
      description: "Membership payment  ",
      logo: "https://papho.org/images/logo.png",
    },
  };

  const placeOrderHandler = (response) => {
    dispatch(membershipPayment(response, email));
  };
  const handleFlutterPayment = useFlutterwave(config);

  const body = {
    full_name,
    orgType,
    email,
    password,
    residence,
    whatsApp,
    country,
    occupation,
    education,
    areaOfInterest,
    serostatus,
    bloodGroup,
    gender,
    sexualOrientation,
    vulnerableOption,
    eduStatus,
    dob,
  };

  const EmailVerification = async (event) => {
    event.preventDefault();
    setShowLoader(false);

    await postData(`${url}/verifyEmail`, { email })
      .then((responses) => {
        setShowLoader(true);
        if (responses.error) {
          if (responses.error.status == 400 || responses.error.data.error) {
            enqueueSnackbar(`${responses.error.data.error}`, {
              variant: "error",
            });
            return;
          }
        } else {
          let data = JSON.parse(responses.result);
          setOtp(data.data);
          enqueueSnackbar(`OTP sent successfuly, check your email`, {
            variant: "success",
          });
        }
      })
      .catch((err) => {
        setShowLoader(true);
        console.log("inner error ", err);
        enqueueSnackbar(`Network Error`, { variant: "error" });
      });
  };

  const handleRegisterHandler = async (event) => {
    setShowLoader(false);
    event.preventDefault();

    // console.log("req body ", body.areaOfInterest);
    if (!email) {
      setShowLoader(true);
      return enqueueSnackbar(`Email is required`, { variant: "error" });
    }
    if (comfirmPassword !== password) {
      setShowLoader(true);
      return enqueueSnackbar(`Password must be equal`, { variant: "error" });
    }
    if (Otp != OtpSent) {
      setShowLoader(true);
      return enqueueSnackbar(`Wrong Otp Code`, { variant: "error" });
    }

    await postData(`${url}/register`, {...body})
      .then((responses) => {
        setShowLoader(true);
        if (responses.error) {
          if (responses.error.status == 400 || responses.error.data.error) {
            enqueueSnackbar(`${responses.error.data.error}`, {
              variant: "error",
            });
            return;
          }
        } else {
            handleFlutterPayment({
              callback: async (response) => {
                if (response.status == "successful") {
                  setShowLoader(true);
                  await placeOrderHandler(response);
                } else {
                  setShowLoader(true);
                  alert("Network Error,  Try again");
                }
              },
            });
          enqueueSnackbar(`Successful Registration`, {
            variant: "success",
          });
        }
      })
      .catch((err) => {
        setShowLoader(true);
        console.log("inner error ", err);
        enqueueSnackbar(`Network Error`, { variant: "error" });
      });
  };

  useEffect(() => {
    if (orderSuccess == true) {
      localStorage.removeItem("order");
    }
    //     if(userInfo && userInfo.id > 0){
    //         history.push("/dashboard")
    //     }
    // if (regsuccess) {
    //     history.push("/dashboard");
    // }
    if (orderSuccess || order) {
      history.push("/login");
    }
    // return () => {
    //   setURL("");
    // }
  }, [order, orderErr, orderSuccess]);

  return (
    <>
      <section className="checkout-section spad" style={{ marginTop: "100px" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-xl-3 col-sm-12"></div>

            <div className="col-lg-6 col-md-6 col-xl-6 col-sm-12 ">
              <div
                className="cf-title btn btn-lg regDiv"
                style={{
                  backgroundColor: "#006BA6",
                  width: "100%",
                  color: "white",
                }}
              >
                Membership Registration
              </div>

              <form
                className="form form-control-sm"
                onSubmit={EmailVerification}
              >
                <div className="mb-3" style={{ marginBottom: "20px" }}>
                  <label for="email" className="form-label">
                    Email Verification <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email Address"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="my-3">
                  <button
                    className="btn btn-primary"
                    type="submit"
                    style={{
                      width: "100%",
                      backgroundColor: "#006BA6",
                      marginTop: "20px",
                      textAlign: "center",
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <div style={{ textAlign: "center", display: "flex" }}>
                      {!showLoader && (
                        <Circles
                          type="Circles"
                          color="red"
                          height={30}
                          width={30}
                        />
                      )}
                    </div>

                    {showLoader && "Send Code"}
                  </button>
                </div>
              </form>

              <form
                // className="form form-control-sm"
                onSubmit={handleRegisterHandler}
              >
                <div className="mb-3" style={{ marginBottom: "20px" }}>
                  <label for="password" className="form-label">
                    OTP Code <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="number"
                    onChange={(e) => setSentOtp(e.target.value)}
                    placeholder="Enter otp code sent to your email"
                    required
                  />
                </div>

                <div className="mb-3" style={{ marginBottom: "20px" }}>
                  <label for="password" className="form-label">
                    New Password <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="password"
                    placeholder="*******************"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3" style={{ marginBottom: "20px" }}>
                  <label for="password" className="form-label">
                    Comfirm New Password <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="password"
                    placeholder="*******************"
                    onChange={(e) => setComfirm(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3" style={{ marginBottom: "20px" }}>
                  <label for="exampleFormControlInput1" className="form-label">
                    Full Name <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="LastName FirstName OtherName"
                    name="full_name"
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-4" style={{ marginBottom: "20px" }}>
                  <label for="conutries" className="form-label">
                    Date of Birth <span style={{ color: "red" }}>*</span>
                  </label>
                  <br />
                  <input
                    onChange={(e) => setDob(e.target.value)}
                    required
                    className="form-control"
                    type="date"
                  />
                </div>

                <div className="mb-4" style={{ marginBottom: "20px" }}>
                  <label for="conutries" className="form-label">
                    Gender <span style={{ color: "red" }}>*</span>
                  </label>
                  <br />
                  <select
                    id="conutries"
                    className="form-select form-select-sm"
                    aria-label=".form-select-sm example"
                    style={{ width: "100%" }}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option selected value="Male">
                      Male
                    </option>
                    <option value="Female">Female</option>
                    <option value="Transgender Female">
                      Transgender Female
                    </option>
                    <option value="Transgender Male">Transgender Male </option>
                    <option value="Gender non-conforming">
                      Gender non-conforming
                    </option>
                    <option value="Not listed/Prefer not to answer">
                      Not listed/Prefer not to answer
                    </option>
                  </select>
                </div>

                <div className="mb-4" style={{ marginBottom: "20px" }}>
                  <label for="conutries" className="form-label">
                    Nationality <span style={{ color: "red" }}>*</span>
                  </label>
                  <br />
                  <select
                    id="conutries"
                    className="form-select form-select-sm"
                    aria-label=".form-select-sm example"
                    style={{ width: "100%" }}
                    name="country"
                    onChange={(e) => setCountry(e.target.value)}
                  >
                    {countries.map((items, index) => {
                      return (
                        <option value={`${items.name}`} key={index}>
                          {`${items.name}`}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="mb-4" style={{ marginBottom: "20px" }}>
                  <label for="conutries" className="form-label">
                    Country of Residence <span style={{ color: "red" }}>*</span>
                  </label>
                  <br />
                  <select
                    id="conutries"
                    className="form-select form-select-sm"
                    aria-label=".form-select-sm example"
                    style={{ width: "100%" }}
                    name="country"
                    onChange={(e) => setResidence(e.target.value)}
                  >
                    {countries.map((items, index) => {
                      return (
                        <option value={`${items.name}`} key={index}>
                          {`${items.name}`}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="mb-3" style={{ marginBottom: "20px" }}>
                  <label for="exampleFormControlInput1" className="form-label">
                    Phone / WhatsApp Number{" "}
                    <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="enter your whatsapp number"
                    required
                    onChange={(e) => setWhatsApp(e.target.value)}
                  />
                </div>

                <div className="mb-4" style={{ marginBottom: "20px" }}>
                  <label for="conutries" className="form-label">
                    Profession/Occupation
                    <span style={{ color: "red" }}>*</span>
                  </label>
                  <br />
                  <select
                    id="conutries"
                    className="form-select form-select-sm"
                    aria-label=".form-select-sm example"
                    style={{ width: "100%" }}
                    name="occupation"
                    required
                    onChange={(e) => setOccupation(e.target.value)}
                  >
                    <option selected value="Activist">
                      Activist
                    </option>
                    <option value="Advocate">Advocate</option>
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
                    <option value="Nurse">Nurse </option>
                    <option value="Other Healthcare Worker">
                      Other Healthcare Worker
                    </option>
                    <option value="Optometrist"> Optometrist </option>
                    <option value="Orthotit and Prosthetist">
                      Orthotit and Prosthetist
                    </option>
                    <option value="Pharmacist"> Pharmacist</option>
                    <option value="Press (Internet Journalist, Broadcast Journalist, Radio Journalist, News agency)">
                      Press (Internet Journalist, Broadcast Journalist, Radio
                      Journalist, News agency)
                    </option>
                    <option value="Media/Medical Journalist ">
                      Media/Medical Journalist
                    </option>

                    <option value="Physiology">Physiology</option>
                    <option value="Physiotherapist">Physiotherapist </option>
                    <option value="Public Health Officers">
                      Public Health Officers
                    </option>
                    <option value="Radiographer">Radiographer</option>
                    <option value="Researcher">Researcher</option>

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
                    <option value="Non-Health Professionals">
                      Non-Health Professionals
                    </option>
                    <option value="Self-employed/consultant">
                      Self-employed/consultant
                    </option>
                    <option value="Veterinary Doctor">Veterinary Doctor</option>
                    <option value="Social Worker">Social Worker</option>
                    <option value="Science Laboratory Technologist">
                      Science Laboratory Technologist
                    </option>
                    <option value="Sonographer">Sonographer</option>
                    <option value="Trado-Medical Practioner">
                      Trado-Medical Practioner e.g Herbal Doctor
                    </option>
                  </select>
                </div>

                <div className="mb-4" style={{ marginBottom: "20px" }}>
                  <label for="conutries" className="form-label">
                    Organisation type<span style={{ color: "red" }}>*</span>
                  </label>
                  <br />
                  <select
                    id="conutries"
                    className="form-select form-select-sm"
                    aria-label=".form-select-sm example"
                    style={{ width: "100%" }}
                    name="occupation"
                    onChange={(e) => setOrgType(e.target.value)}
                  >
                    <option selected value="Hospital/clinic">
                      Hospital/clinic
                    </option>
                    <option value="Academia (University, Research Institute etc.)">
                      Academia (University, Research Institute etc.)
                    </option>
                    <option value="Government e.g Ministry of health respresentative, Government health institutions etc.">
                      Government e.g Ministry of health respresentative,
                      Government health institutions etc.
                    </option>
                    <option value="Intergovernmental organisation (e.g. United Nations, WHO) ">
                      Intergovernmental organisation (e.g. United Nations, WHO)
                    </option>
                    <option value="Non-governmental organisation">
                      Non-governmental organisation
                    </option>
                    <option value="Grassroots community-based organisation">
                      Grassroots community-based organisation
                    </option>
                    <option value="People living with HIV/AIDS group/network">
                      {" "}
                      People living with HIV/AIDS group/network
                    </option>
                    <option value="Faith-based foundation ">
                      {" "}
                      Faith-based foundation{" "}
                    </option>

                    <option value="Charitable foundation">
                      Charitable foundation
                    </option>

                    <option value="Medical/Health Regulatory Bodies e.g. MDCN, MLSCN, PSN etc.">
                      Medical/Health Regulatory Bodies e.g. MDCN, MLSCN, PSN
                      etc.
                    </option>
                    <option value="Medical Diagnostics Centre">
                      {" "}
                      Medical Diagnostics Centre{" "}
                    </option>
                    <option value="Care Home">Care Home</option>

                    <option value="Trade union">Trade union</option>

                    <option value="Cooperative">Cooperative</option>
                    <option value="Pharmaceutical company">
                      Pharmaceutical company{" "}
                    </option>
                    <option value="Private sector (other than pharmaceutical company)">
                      Private sector (other than pharmaceutical company)
                    </option>
                    <option value="Media organisation">
                      Media organisation
                    </option>

                    <option value="Health Equipment Manufacturer">
                      Health Equipment Manufacturer{" "}
                    </option>

                    <option value="Trado-Medical Company">
                      Trado-Medical Company
                    </option>
                    <option value="Pharmaceutical products/services">
                      {" "}
                      Pharmaceutical products/services
                    </option>

                    {/* <option value="Others">Others </option> */}
                    <option value="Other organisation/affiliation">
                      Other organisation/affiliation{" "}
                    </option>
                  </select>
                </div>

                <div className="mb-4" style={{ marginBottom: "20px" }}>
                  <label for="conutries" className="form-label">
                    Education Level <span style={{ color: "red" }}>*</span>
                  </label>
                  <br />

                  <select
                    id="conutries"
                    className="form-select form-select-sm"
                    aria-label=".form-select-sm example"
                    style={{ width: "100%" }}
                    onChange={(e) => setEducation(e.target.value)}
                  >
                    <option selected value="Undergraduate">
                      Undergraduate
                    </option>
                    <option value="Graduate">
                      Graduate
                    </option>
                    <option value="Postgraduate (PhD, doctoral student, Master )">
                      Postgraduate (PhD, doctoral student, Master )
                    </option>
                    <option value="Post-doctoral">Post-doctoral</option>
                    <option value="Professor">Professor</option>
                    <option value="Other student">Other student</option>
                  </select>
                </div>

                <div className="mb-4" style={{ marginBottom: "20px" }}>
                  <label for="areaOfInterest" className="form-label">
                    Area of Interest <span style={{ color: "red" }}>*</span>
                  </label>
                  <br />
                  <Select
                    // className="form-select form-select-md"
                    components={animatedComponents}
                    isMulti
                    options={data}
                    // onChange={(e) => setAreaOfInterest(e.target.value)}
                    onChange={AreaOfInterest}
                  />

                  {/* <select
                    className="form-select form-select-sm"
                    aria-label=".form-select-sm"
                    style={{ width: "100%" }}
                    required
                    onChange={(e) =>
                      setAreaOfInterest(e.target.selectedOptions)
                    }
                    multiple
                  >
                    <option
                      selected
                      value="Advanced Innovation, Research and Discovery"
                    >
                      Advanced Innovation, Research and Discovery
                    </option>
                    <option value="Humanitarian Activities">
                      Humanitarian Activities
                    </option>
                    <option value="Health and Peace">Health and Peace</option>
                    <option value="Health and Earth">Health and Earth</option>
                    <option value="Traditional/Herbal Medicine - Ethnomedicine">
                      Traditional/Herbal Medicine - Ethnomedicine
                    </option>
                    <option
                      value="Education (Course content creator, Health Training/Trainer,
                      Online Course)"
                    >
                      Education (Course content creator, Health
                      Training/Trainer, Online Course)
                    </option>
                    <option value="TeleMed(E-Health Program, Join our Medical & Health experts to attend to Patient Online as volunteers or Paid)">
                      TeleMed(E-Health Program, Jon our Medical & Health experts
                      to attend to Patient Online as volunteers or Paid)
                    </option>
                  </select> */}
                </div>

                <div className="mb-4" style={{ marginBottom: "20px" }}>
                  <label for="conutries" className="form-label">
                    Serostatus <span style={{ color: "red" }}>*</span>
                  </label>
                  <br />
                  <select
                    id="conutries"
                    required
                    className="form-select form-select-sm"
                    aria-label=".form-select-sm example"
                    style={{ width: "100%" }}
                    onChange={(e) => setSerostatus(e.target.value)}
                  >
                    <option selected value="HIV+">
                      HIV+
                    </option>
                    <option value="HIV-">HIV-</option>
                    <option value="Prefer not to speak">
                      Prefer not to speak
                    </option>
                  </select>
                </div>

                <div className="mb-4" style={{ marginBottom: "20px" }}>
                  <label for="conutries" className="form-label">
                    Blood Group <span style={{ color: "red" }}>*</span>
                  </label>
                  <br />
                  <select
                    id="conutries"
                    className="form-select form-select-sm"
                    aria-label=".form-select-sm example"
                    style={{ width: "100%" }}
                    onChange={(e) => setBloodGroup(e.target.value)}
                  >
                    <option selected value="O Rh +ve">
                      O Rh +ve
                    </option>
                    <option value="A Rh +ve">A Rh +ve</option>
                    <option value="B Rh +ve">B Rh +ve</option>
                    <option value="AB Rh +ve">AB Rh +ve</option>
                    <option value="O Rh +ve">O Rh -ve</option>
                    <option value="A Rh +ve">A Rh -ve</option>
                    <option value="B Rh +ve">B Rh -ve</option>
                    <option value="AB Rh +ve">AB Rh -ve</option>
                  </select>
                </div>

                <div className="mb-4" style={{ marginBottom: "20px" }}>
                  <label for="conutries" className="form-label">
                    Sexual Orientation <span style={{ color: "red" }}>*</span>
                  </label>
                  <br />
                  <select
                    id="conutries"
                    className="form-select form-select-sm"
                    aria-label=".form-select-sm example"
                    style={{ width: "100%" }}
                    onChange={(e) => setSexualOrientation(e.target.value)}
                  >
                    <option selected value="Gay or lesbian">
                      Gay or lesbian
                    </option>
                    <option value="Heterosexual">Heterosexual</option>
                    <option value="Bisexual">Bisexual</option>
                    <option value="Prefer not to speak">
                      Prefer not to speak
                    </option>
                  </select>
                </div>

                <div className="mb-4" style={{ marginBottom: "20px" }}>
                  <label for="conutries" className="form-label">
                    Do you identify with any of the below key and vulnerable
                    populations? (optional)
                  </label>
                  <br />
                  <select
                    id="conutries"
                    className="form-select form-select-sm"
                    aria-label=".form-select-sm example"
                    style={{ width: "100%" }}
                    onChange={(e) => setVulnerableOption(e.target.value)}
                  >
                    <option selected value="Men who have sex with men">
                      Men who have sex with men
                    </option>
                    <option value="People who use drugs">
                      People who use drugs
                    </option>
                    <option value="People in prisons and other closed settings">
                      People in prisons and other closed settings
                    </option>
                    <option value="Sex workers"> Sex workers</option>
                    <option value="Transgender and non-binary people">
                      {" "}
                      Transgender and non-binary people
                    </option>
                    <option value="Young people (15-25)">
                      {" "}
                      Young people (15-25)
                    </option>
                    <option value="Migrant populations">
                      {" "}
                      Migrant populations
                    </option>
                    <option value="Indigenous people">
                      {" "}
                      Indigenous people
                    </option>
                    <option value="People with disabilities">
                      {" "}
                      People with disabilities
                    </option>
                    <option value="People living with HIV">
                      {" "}
                      People living with HIV
                    </option>
                    <option value="Other vulnerable populations">
                      {" "}
                      Other vulnerable populations
                    </option>
                    <option value="None Applicabele"> None Applicabele</option>
                  </select>
                </div>

                <div className="mb-4" style={{ marginBottom: "20px" }}>
                  <label for="conutries" className="form-label">
                    Current Educational Status
                  </label>
                  <br />
                  <select
                    id="conutries"
                    className="form-select form-select-sm"
                    aria-label=".form-select-sm example"
                    style={{ width: "100%" }}
                    onChange={(e) => setEduStatus(e.target.value)}
                  >
                    <option selected value="Student">
                      Student
                    </option>

                    <option value="nonStudent">Non Student</option>
                  </select>
                </div>

                <input type={"checkbox"} required value="Data priacy policy" />

                <small style={{ fontSize: "17px", paddingLeft: "1rem" }}>
                  Acceptance of PAHPO terms and condition
                </small>
                <p>
                  <small style={{ fontSize: "17px", paddingLeft: "1rem" }}>
                    Already have an account ? <Link to="/login">Login</Link>
                  </small>
                </p>

                <br />

                <div className="my-3">
                  <button
                    className="btn btn-primary"
                    type="submit"
                    style={{
                      width: "100%",
                      backgroundColor: "#006BA6",
                      marginTop: "20px",
                      textAlign: "center",
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <div style={{ textAlign: "center", display: "flex" }}>
                      {!showLoader && (
                        <Circles
                          type="Circles"
                          color="red"
                          height={30}
                          width={30}
                        />
                      )}
                    </div>
                    {showLoader && "Register"}
                  </button>
                </div>
              </form>
            </div>
            <div className="col-lg-3 col-md-3 col-xl-3 col-sm-12"></div>
          </div>
        </div>
      </section>

      <div className="clear-fix" style={{ margin: "50px" }}></div>
      <div className="clear-fix" style={{ margin: "50px" }}></div>
      <div className="clear-fix" style={{ margin: "50px" }}></div>
    </>
  );
};

export default RegisterComponent;
