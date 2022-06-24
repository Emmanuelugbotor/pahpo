import Nav from "../../components/Navbar/navBar";
import LoginComp from "../../components/LoginComp";

const MemberShipLoginPage = () => {
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
            Login to your PAHPO account
          </h2>
        </center>
      </div>
      <LoginComp />
    </>
  );
};

export default MemberShipLoginPage;
