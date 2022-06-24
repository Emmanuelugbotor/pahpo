import React from "react";
import { Link } from "react-router-dom";
import { StyleSheet, css } from "aphrodite";
import '../App.css'
import Button from "./button";

const NavBarHeading = () => {
  const styles = StyleSheet.create({
    hiders:{
      marginTop: "200px",
      
     "@media (max-width: 600px)": {
        marginTop: "10px"
    },
     
    }
  })
  return (
    <div className="container " >
    
    <div className="row">
    <div className="col-md-6 col-sm-12 col-lg-6 col-xs-12 ">
      
      
      <div className={css(styles.hiders)}>
 
      
 
        <h2 className="" style={{fontWeight: 900, color: 'white', fontFamily: "Poppins"}}>
        PAN AFRICA HEALTH PROFESSIONALS ORGANIZATION (PAHPO)
        </h2>

        <p style={{fontSize: '18px', color: 'white', textAlign: 'left'}}>
          
        is a Non-Profit Organisation established in March,
        2020 to bridge the gap between Africa healthcare systems
        and other continents through research, innovation and 
        unity among healthcare professionals from African
        countries for the  development of Africa.
          
          </p>
        
        <Button path="/membersregister" className="btn btn" 
        width= "50%"
        value="Become a Member"/>
      
      </div>
    </div>

    <div className="col-md-6 col-lg-6 col-sm-1 col-xs-0 "  >
      <img className="img-fluid" src="images/bg_head.png" />
    </div>
</div>
  </div>
  );
};

export default NavBarHeading;
