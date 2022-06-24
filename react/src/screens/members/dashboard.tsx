import { useEffect, useState } from "react";
import { UserData } from "src/utils/userData";
import "./dashboard.css";
import { LogoutRounded } from "@mui/icons-material";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOut } from "../../redux/actions/usersAction";

export const MembersDashboard = () => {

  let navigation = useHistory();
  let dispatch = useDispatch();
  let data = UserData();
  let Logout = () => {
    dispatch(signOut());
  };
  useEffect(() => {
    if (!data?.full_name) {
      navigation.push("/login");
    }
  }, [data]);

  return (
    <>
      <header className="dashboard">
        <div className="sticky_header">
          <ul className="left_section">
            <a href="/">
              <li className="company_logo">
                <img src="/images/pahpo_logo.jfif" alt="" />
              </li>
            </a>
            <li className="vacancy">Submit a job vacancy</li>
          </ul>
          <ul className="right_section">
            <li className="english"></li>
            <li>{/* <i className="fa-solid fa-envelope"></i> */}</li>
            <li>{/* <i className="fa fa-solid fa-bell"></i> */}</li>
            <li>
              <i className="fa-solid fa-cannabis"></i>
            </li>
            <li className="fa fa-logout" onClick={() => Logout()}>
              <LogoutRounded />
            </li>
          </ul>
        </div>
        <div className="dashboard_user_details">
          <div className="dashboard_user_details_image">
            <i className="fa-solid fa-cannabis"></i>
          </div>

          <h1>{data && data.full_name}</h1>
          <h3>{data && data.occupation}</h3>
        </div>
        <div className="dashboard_user_listing">
          <ul>
            <li className="active">Bio</li>
            <li>CourseMed</li>
            <li>Events</li>
            <li>Topic</li>
            <li>Groups</li>
            <li>Admin</li>
          </ul>
        </div>
      </header>
      <div className="main_wrapper">
        <main>
          <div className="main_top">
            <h2>Contact Information</h2>
            <ul>
              <li>
                <p>Profession / Occupation</p>{" "}
                <span>{data && data.occupation} </span>
              </li>
              <li>
                <p>Member Since</p> <span>{data && data.createdAt }</span>
              </li>
              <li>
                <p>Organisation / Company / Affiliation</p>{" "}
                <span>Pan African Health Professionals Organisation</span>
              </li>
              <li>
                <p>Country of residence</p> <span>{data && data.country}</span>
              </li>
              <li>
                <p>Interests</p>
              </li>
              <ol>
                <li>{data && data.areaOfInterest}</li>
                {/* <li>HIV cure</li>
                            <li>Human rights (incl. key and vulnerable populations)</li>
                            <li>Paediatrics, adolescents, youth</li>
                            <li>Stigma</li> 
                            <li>Vaccines</li> */}
              </ol>
            </ul>
          </div>
          <div className="main_bottom">
            <h3>My membership status</h3>
            <p>VERIFIED</p>
          </div>
        </main>
      </div>
    </>
  );
};
