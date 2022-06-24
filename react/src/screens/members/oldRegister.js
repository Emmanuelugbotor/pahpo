import Nav from "../../components/Navbar/navBar";
import LoginComp from "../../components/LoginComp";
import RegisterComponent from "./RegisterPage";

const MemberShipRegisterPage = () => {
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
            Become a PAHPO Member
          </h2>
        </center>
      </div>
      <RegisterComponent />
    </>
  );
};

export default MemberShipRegisterPage;
