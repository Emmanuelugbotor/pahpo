import BenefitCard from "./benefitCard";
import { StyleSheet, css } from "aphrodite";
import Button from "./button";

const ServiceContainer = () => {
    const styles = StyleSheet.create({
        
        hiders:{
            backgroundImage: "url(" + "images/bg_service.jpg" + ")",
            backgroundRepeat: "no-repeat",
            "@media only screen and (min-width: 820px)": {
                height: "100vh",
                clipPath: 'polygon(0 0, 100% 0, 90% 90vh, 0 100%)'
            },
        }
      })
  return (
    <section id="About">
      <div className="">
          <div className={css(styles.hiders)}
          >
            <center>
            <div className="container row" style={{paddingTop: '150px'}} >
                
            <h1><b style={{color: 'white'}}> Services Provided By PAHPO </b></h1>
            <p style={{color: 'white'}}> 
            A team of expert doctors that are leading our Organisation! Meet our staff and visit us for your next problem!
            </p>

              <BenefitCard bg="white"  img="images/bg_service.png" heading="Research, Innovation and Discovery"  body="Medical and health educational course and discoveries" />
              <BenefitCard bg="white" img="images/bg_service2.png" heading="Humanitarian Activities and Event"  body="Free Humanitarian services and all round trips events." />
              <BenefitCard bg="white" img="images/bg_service3.png" heading="CourseMed"  body="Rich online medical courses enrolenment" />
          
              <center>


              <Button path="/" width="50%" value="View all services"  />
              </center>
            </div>
            </center>
          </div>
      </div> 
    </section>
  );
};
export default ServiceContainer;
