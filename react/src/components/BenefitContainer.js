import BenefitCard from "./benefitCard";

const BenefitContainer = () => {
  return (
    <section id="About">
      <div className="container">
        <div className="row">
          <div
            className="col-md-6 col-lg-6"
            style={{
              backgroundImage: "url(" + "images/bg_benefit1.png" + ")",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="row" style={{ marginTop: "100px" }}>
            <h2><b> PAHPO MEMBERS BENEFITS</b></h2>
              <BenefitCard  img="images/bg_icon1.png" heading="Research, Innovation and Discovery"  body="Medical and health educational course and discoveries" />
              <BenefitCard  img="images/bg_icon1.png" heading="Humanitarian Activities and Event"  body="Free Humanitarian services and all round trips events." />
              <BenefitCard  img="images/bg_icon2.png" heading="CourseMed"  body="Rich online medical courses enrolenment" />
              <BenefitCard  img="images/bg_icon2.png" heading="TeleMed"  body="Enjoy the endless free access to telemed for all members" />
              <BenefitCard  img="images/bg_icon3.png" heading="Health and Peace"  body="Frequent health checkup on all registered members" />
              <BenefitCard  img="images/bg_icon3.png" heading="Health and Climate Change"  body="Get Involved by becoming a memeber and join the train of research and discoveries" />
              <BenefitCard  img="images/bg_icon4.png" heading="Healthcare Professional Regulation"  body="Be part of thee regulations of healthcare professional" />
            </div>
          </div>

          <div className="col-md-6">
            <img
              className="img-fluid"
              src="images/bg_benefit.png"
              style={{
                height: "fit-content",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default BenefitContainer;
