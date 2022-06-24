import { StyleSheet, css } from "aphrodite";
import '../App.css'

const BenefitCard = (props) => {
  let { img, heading, body, bg } = props;
  const styles = StyleSheet.create({
        
    hiders:{
      alignItems: 'center',
      height:"80px",
      marginBottom: bg ? '30px' : '1px'
    }
  })
  return (
    <div className={bg ? "col-md-4 col-lg-4 service-card" : "col-md-6 col-lg-6"}
    
    >
      <img className={css(styles.hiders)} src={img} />
      <h4>
          
        <b> {heading}</b>
      </h4>
      <p>{body}</p>
    </div>
  );
};

export default BenefitCard;
