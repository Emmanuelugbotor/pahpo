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
import { createOrder, membershipPayment } from "src/redux/actions/orderActions";
import { countries } from "src/utils/countries";
import Select from "react-select";
import makeAnimate from "react-select/animated";
import { data } from "../../utils/algorithms";

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

  const [email, setEmail] = useState("");
  const [full_name, setName] = useState("");
  const [website, setWebsite] = useState("");
  const [location, setLocation] = useState("Local");
  const [address, setAddress] = useState("");
  const [phone, setWhatsApp] = useState("");
  const [position, setPosition] = useState("");
  const [country, setCountry] = useState("Nigeria");
  const [orgSection, setOrgSection] = useState("Activist");
  const [areaOfInterest, setAreaOfInterest] = useState(
    "Advanced Innovation, Research and Discovery"
  );
  const [password, setPassword] = useState("");
  const [comfirmPassword, setComfirm] = useState("");
  const [Otp, setOtp] = useState(0);
  const [OtpSent, setSentOtp] = useState(0);
  const [orgEmail, setOrgEmail] = useState("")
  const [showLoader, setShowLoader] = useState(true);

  const body = {
    full_name,
    email,
    password,
    phone,
    country,
    orgSection,
    areaOfInterest,
    website,
    location,
    address,
    position,
    orgEmail,
  };
    const AreaOfInterest = (val) => {
      let values = new String();
      if (val.length) {
        val.forEach((items, index) => {
          values += `${items.value} + `;
        });
      }
      setAreaOfInterest(values);
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
    // console.log("sending request to the backend ", body)
    setShowLoader(false);
    event.preventDefault();

    if (comfirmPassword !== password) {
      setShowLoader(true);
      return enqueueSnackbar(`Password must be equal`, { variant: "error" });
    }
    if (Otp != OtpSent) {
      setShowLoader(true);
      return enqueueSnackbar(`Wrong Otp Code`, { variant: "error" });
    } else {
      enqueueSnackbar(`Successful Registration`, {
        variant: "success",
      });
    }

    // await postData(`${url}/register`, body)
    //   .then((responses) => {
    //     setShowLoader(true);
    //     if (responses.error) {
    //       if (responses.error.status == 400 || responses.error.data.error) {
    //         enqueueSnackbar(`${responses.error.data.error}`, {
    //           variant: "error",
    //         });
    //         return;
    //       }
    //     } else {
    //       enqueueSnackbar(`Successful Registration`, {
    //         variant: "success",
    //       });
    //     }
    //   })
    //   .catch((err) => {
    //     setShowLoader(true);
    //     console.log("inner error ", err);
    //     enqueueSnackbar(`Network Error`, { variant: "error" });
    //   });
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
      history.push("/");
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
                Partnership Registration
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

                    {showLoader && "Send Otp Code"}
                  </button>
                </div>
              </form>

              <form
                className="form form-control-sm"
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
                    Organisation Name <span style={{ color: "red" }}>*</span>
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

                <div className="mb-3" style={{ marginBottom: "20px" }}>
                  <label for="exampleFormControlInput1" className="form-label">
                    Organisation Website{" "}
                    <span style={{ color: "red" }}>(optional)</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="https://www.pahpo.org"
                    name="full_name"
                    onChange={(e) => setWebsite(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3" style={{ marginBottom: "20px" }}>
                  <label for="exampleFormControlInput1" className="form-label">
                    Organisation Email{" "}
                    <span style={{ color: "red" }}>(optional)</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="https://www.pahpo.org"
                    name="full_name"
                    onChange={(e) => setOrgEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-4" style={{ marginBottom: "20px" }}>
                  <label for="conutries" className="form-label">
                    Organisation Location{" "}
                    <span style={{ color: "red" }}>*</span>
                  </label>
                  <br />
                  <select
                    id="conutries"
                    className="form-select form-select-sm"
                    aria-label=".form-select-sm example"
                    style={{ width: "100%" }}
                    onChange={(e) => setLocation(e.target.value)}
                  >
                    <option selected value="Local">
                      Local (Within Africa)
                    </option>
                    <option value="International">
                      International ( Outside Africa ){" "}
                    </option>
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
                </div>

                <div className="mb-3" style={{ marginBottom: "20px" }}>
                  <label for="exampleFormControlInput1" className="form-label">
                    Organisation address
                    {/* <span style={{ color: "red" }}>*</span> */}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="enter your whatsapp number"
                    required
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>

                <div className="mb-3" style={{ marginBottom: "20px" }}>
                  <label for="exampleFormControlInput1" className="form-label">
                    Phone Number
                    <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="enter your phone number"
                    required
                    onChange={(e) => setWhatsApp(e.target.value)}
                  />
                </div>

                <div className="mb-4" style={{ marginBottom: "20px" }}>
                  <label for="conutries" className="form-label">
                    Country of Organisation Operation / Establishment{" "}
                    <span style={{ color: "red" }}>*</span>
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

                <div className="mb-3" style={{ marginBottom: "20px" }}>
                  <label for="exampleFormControlInput1" className="form-label">
                    Your Position in the Organisation (Optional)
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="enter your whatsapp number"
                    required
                    onChange={(e) => setPosition(e.target.value)}
                  />
                </div>

                <div className="mb-4" style={{ marginBottom: "20px" }}>
                  <label for="conutries" className="form-label">
                    Organisation Sector
                    <span style={{ color: "red" }}>*</span>
                  </label>
                  <br />

                  <select
                    id="conutries"
                    className="form-select form-select-sm"
                    aria-label=".form-select-sm example"
                    style={{ width: "100%" }}
                    name="orgSection"
                    onChange={(e) => setOrgSection(e.target.value)}
                  >
                    <option value="Medical Laboratory Services">
                      Medical Laboratory Service
                    </option>
                    <option value="Pharmacist"> Pharmacist</option>
                    <option value="Hospital/Clinic ">Hospital/Clinic</option>
                    <option value="Pharmaceutical Company">
                      Pharmaceutical Company
                    </option>
                    <option value="Health Equipment Manufacturing">
                      Health Equipment Manufacturing
                    </option>
                    <option value="Health Institutions">
                      Health Institutions
                    </option>
                    <option value="Research Institute/Organisation">
                      Research Institute/Organisation
                    </option>
                    <option value="NGO / NPO ">NGO / NPO</option>
                    <option value="Trado-Medical Company">
                      Trado-Medical Company
                    </option>
                    <option value="Non-Health Institution">
                      Non-Health Institution
                    </option>

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

                <input type={"checkbox"} required value="Data priacy policy" />

                <small style={{ fontSize: "17px", paddingLeft: "1rem" }}>
                  Acceptance of PAHPO terms and condition
                </small>
                {/* <p>
                  <small style={{ fontSize: "17px", paddingLeft: "1rem" }}>
                    Already have an account ? <Link to="/login">Login</Link>
                  </small>
                </p> */}

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
