import Button from "./button";

const AboutContainer = () => {
  return (

    <section id="About">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              className="img-fluid"
              src="images/bg_about1.png"
              style={{
                height: "fit-content",
                borderTopLeftRadius: "3%",
                borderTopRightRadius: "3%",
                borderBottomLeftRadius: "3%",
                borderBottomRightRadius: "3%",
              }}
            />
          </div>

          <div
            className="col-md-6"
            style={{
              backgroundImage: "url(" + "images/bg_about.png" + ")",
              backgroundRepeat: "no-repeat",
            }}
          >


            <div style={{paddingTop: "100px"}}>
            <h2
            > <b> AHPO - African Health Professionals Organisation </b> 
             
            </h2>
            <p >
              Become an AHPO partner and join the united front against poor
              healthcare delivery system in Africa. United in Research,
              Innovation and Discovery for the development of Africa!
            </p>

            <Button
              path="/products"
              className="btn btn"
              backgroundColor="#005a87"
              borderColor="#005a87"
              marginTop="20px"
              fontWeight="bold"
              borderTopLeftRadius="35px"
              borderTopRightRadius="35px"
              borderBottomRightRadius="35px"
              height="45px"
              borderBottomLeftRadius="35px"
              color="white"
              textAlign="center"
              value="Be a Partner"
              width="100%"
            />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutContainer;
