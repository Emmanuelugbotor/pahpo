import Nav from "../../components/Navbar/navBar";
import LoginComp from "../../components/LoginComp";
import RegisterComponent from "./regPage";

const PartnerRegisterPage = () => {
  return (
    <>
      <div
        className=""
        style={{
          backgroundImage: "url(" + "images/bg_aboutP.jpg" + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "450px",
        }}
      >
        <Nav />
        <center>
          <h2 style={{ marginTop: "100px", color: "white" }}>
            Become a PAHPO Partner
          </h2>
        </center>
      </div>
      <RegisterComponent />
    </>
  );
};

export default PartnerRegisterPage;
