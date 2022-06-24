
const AboutCard = (props) => {
  let {  heading, body} = props;

  return (
    <div className="col-md-12 col-lg-12" style={{borderLeftColor: '#4DB0E1',
    borderLeftWidth: "5px", borderLeftStyle: 'outset',
    boxShadow: '0px 20px 20px rgba(85, 83, 83, 0.8)', padding: '20px', margin: '20px'
    
    }}  >
      <h4>  
        <b> {heading}</b>
      </h4>
      <p>{body}</p>
    </div>
  );
};

export default AboutCard;
