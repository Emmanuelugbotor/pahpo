import React from "react";
import { StyleSheet, css } from "aphrodite";



const EmailForm = () => {
  const styles = StyleSheet.create({
        
    hiders:{
      backgroundImage: "url("+ "images/bg_sub2.png" +")",
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'Top center',
      height: '70vh',
      
      "@media only screen and (min-width: 820px)": {
        backgroundPosition: 'Top center',
        backgroundImage: "url(" + "images/bg_sub.png" + ")",
        height: '70vh',
        },
      }
    })
    return (
      <section style={{
          backgroundImage: "url(" + "images/bg_subscribe.jpg" + ")",
          height: "100vh",
          clipPath: 'polygon(0 0, 100% 0, 90% 90vh, 0 100%)',
          backgroundRepeat: "no-repeat",
          backgroundPosition: 'Top center',
    }} >
      
      <div className={css(styles.hiders)} >

        <center>

          <div style={{paddingTop: '150px'}}>

          <h2 style={{color: 'white'}}> Subscribe Now to Our Newsletter! </h2>
          <p style={{color: 'white'}}> A team of expert doctors that are leading our clinic!
             Meet our staff and visit us for your next problem! </p>
          </div>
        </center>

        <form className="container d-flex" style={{ padding: "10px", }}>
        

          <input
            className="form-control"
            type="email"
            placeholder="Subscribe to our newsletters"
            aria-label="Subscribe"
            style={{
              borderRadius: '35px',
              height: '60px',
              width: '90%'
            }}
            
            />
          <button
            className="btn btn"
            style={{
              backgroundColor: "#005a87",
              color: "white",
              borderColor: "#005a87",
              borderRadius: '35px',
              marginLeft: '-100px',
            }}
            type="button"
            >
            Subscribe
          </button>
          
        </form>
     
      </div>
    </section>
  );
};

export default EmailForm;
