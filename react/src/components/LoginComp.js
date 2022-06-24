import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signin, register } from "../redux/actions/usersAction";
import "../App.css";
import axios from "axios";
import { Redirect, useHistory, Link } from "react-router-dom";
import url from "src/constant/url";
import { usePost, postData } from "src/utils/useFetch";
import { useSnackbar } from "notistack";
import { Circles } from "react-loader-spinner";
import * as actionTypes from "../redux/constants/usersConstant";
import { useFlutterwave } from "flutterwave-react-v3";
import { createOrder, membershipPayment } from "src/redux/actions/orderActions";

const LoginComp = (props) => {
  let history = useHistory();
  let dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const userSignin = useSelector((state) => state.userSignIn);
  let { userInfo, success, loading, error } = userSignin;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showLoader, setShowLoader] = useState(false);
  const [showLoaderPay, setShowLoaderPay] = useState(false);

  const placeOrderHandler = (response) => {
    dispatch(membershipPayment(response, email));
  };


  const body = {
    email,
    password,
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setShowLoader(true);
    await dispatch(signin(email, password));
  };

  const config = {
    public_key: "FLWPUBK_TEST-c2c93645ec804dcafa80ccaf15bb4acd-X",
    tx_ref: Date.now(),
    amount:  20,
    currency: "USD",
    payment_options: "card, ussd, bank",
    customer: {
      email: email,
      // phone_number: whatsApp, 
      // name: full_name,
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
  const handleFlutterPayment = useFlutterwave(config);

  useEffect(() => {
    if ((userInfo != undefined && Object.entries(userInfo).length > 0)) {
      setShowLoader(false);
      history.push("/dashboard");
    }

    if (error) {
      setShowLoader(false);
      enqueueSnackbar(`${error ? error : "Network Error"}`, {
        variant: "error",
      });
    }
    return () => {
      if (error) {
        localStorage.removeItem("userInfo");
        dispatch({
          type: actionTypes.USER_SIGNOUT,
        });
      }
    };
  }, [loading]);

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
                Membership Login
              </div>

              <form className="form" onSubmit={submitHandler}>
                <div className="cf-title" style={{ height: "30px" }}></div>

                <div className="row address-inputs form-group">
                  <div className="col-md-12">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Email"
                      required
                      style={{ marginBottom: "15px" }}
                      onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                      className="form-control"
                      type="password"
                      placeholder="Password"
                      required
                      style={{ marginBottom: "15px" }}
                      onChange={(e) => setPassword(e.target.value)}
                    />

                    <h3 style={{float: "right"}}>
                      Don't have an account ?
                      <Link to="/membersregister">Register</Link>
                    </h3>
                    <br />

                    <button
                      className="form-control btn btn-primary"
                      type="submit"
                      style={{
                        backgroundColor: "#006BA6",
                        color: "white",
                        width: "100%",
                        textAlign: "center",
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <div style={{ textAlign: "center", display: "flex" }}>
                        {showLoader && (
                          <Circles
                            type="Circles"
                            color="red"
                            height={30}
                            width={30}
                          />
                        )}
                        {!showLoader && "Login"}
                      </div>
                    </button>

                    { <button
                      className="form-control btn btn-primary"
                      type="button"
                      style={{
                        backgroundColor: "#006BA6",
                        color: "white",
                        width: "100%",
                        textAlign: "center",
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                        marginTop: "20px"
                      }}
                      
                      onClick={()=>{
                        setShowLoaderPay(true);
                        if (!email) {
                          setShowLoader(false);
                          return enqueueSnackbar(`Email is required`, { variant: "error" });
                        }
                        handleFlutterPayment({
                          callback: async (response) => {
                            if (response.status == "successful") {
                              setShowLoaderPay(false);
                              await placeOrderHandler(response);
                            } else {
                              setShowLoaderPay(false);
                              alert("Network Error,  Try again");
                            }
                          },
                        });
                      }}
                    >
                        <div style={{ textAlign: "center", display: "flex" }}>
                      {showLoaderPay && (
                        <Circles
                          type="Circles"
                          color="red"
                          height={30}
                          width={30}
                        />
                      )}
                      {!showLoaderPay && "Pay membership fee" }
                      

                    </div>
                    </button>}
                  </div>
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

export default LoginComp;
