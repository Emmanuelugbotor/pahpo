import "./footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';

const FooterComponent = () => {
  return (
    <footer>
    <div className="footer_left">
        <div className="individual_item">
            <h2>Quick Links</h2>
            <ul>
                <li>About PAHPO</li>
                <li>Our members</li>
                <li>Our Services</li>
                <li>Latest News</li>
                <li>Get in touch</li>
               
            </ul>
        </div>
        <div className="individual_item">
            <h2>Get Involved</h2>
            <ul>
                <li>About PAHPO</li>
                <li>Our members</li>
                <li>Our Services</li>
                <li>Latest News</li>
                <li>Get in touch</li>
            </ul>
        </div>
        <div className="individual_item">
            <h2>Quick Links</h2>
            <ul>
                {/* <li>Our Team</li> */}
                {/* <li>Our patients</li>
                <li>Other Products</li> */}
                {/* <li>My account</li>
                <li>Appointment</li> */}
                <li>Conferences</li>
                <li>Contact</li>
                <li>Features</li>
                <li>News and Publication</li>
            </ul>
        </div>

    </div>
    <div className="footer_middle"></div>
    <div className="footer_right">
            <h2>Contact Us</h2>
            <p>Pan African Health Professionals Organisation HQ</p>
            <p> CX-011-3466 NO. KZ 705/3, </p>
            <p> Kasoa Newtown,  Cape Coast, </p>
            <p> Central, Ghana.</p>
            <p></p>
            <p> Tax ID: C0061065560 </p>
            <p> Reg No: CG198650721  </p>
          
            <p> Phone: +233-242666877; +234-8030419009</p>
            <p className="red">Email: <a href="mailto:info@pahpo.org" style={{textDecoration: 'none', color: "red"}} className="red">info@pahpo.org </a>;
            <a href="mailto: admin@pahpo.org" style={{textDecoration: 'none', color: "red"}}  className="red"> admin@pahpo.org </a> </p>

            {/* <div className="subscribe_box">
                <input type="text" />
                <button className="btn white special">Subscribe</button>
            </div> */}

            <div className="social_media_wrapper">
            <h3>Follow us</h3>
            <ul className="social">
                <li>
                <a href="https://www.facebook.com/medicalhealthprofessionals/" target="_blank">
                <FacebookIcon className='facebook'/>
                </a>
                   
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/pan-african-health-professionals-organisation-pahpo-26aa14219" target="_blank">
                    <LinkedInIcon className='linkedin'/> 
                    </a>
                   </li>
                <li>
                    <a href="https://www.youtube.com/channel/UCuduVThNbotlSR17CZXy-6g" target="_blank">
                    <YouTubeIcon className="youtube"/>
                    </a>
               </li>
              
                <li>
                <a href="https://t.me/joinchat/YQjurPrASgE3MGQ0" target="_blank">
                <TelegramIcon className="telegram"/>
                </a>
                </li>
                <li>
                    <a href="https://www.twitter.com/PAHPO_NGO" target="_blank">
                    <TwitterIcon className="twitter"/>
                    </a>
                </li>
                <li>
                    <a href="" target="_blank">
                        <InstagramIcon className="instagram"/>
                    </a>
                </li>
            </ul>
            </div>
           
    </div>
</footer>
    
//     <section id=""
//     style={{
//         backgroundColor: 'black !important',
//         backgroundSize: 'cover',
//         backgroundImage: "url("+ "images/bg_foot.jpg" +")",
//         backgroundRepeat: 'no-repeat',
//         backgroundPosition: 'top right',
//         height: '100vh'
//       }}
    
//     >
//     <div className="container">
//     <div className="row" 
    
//     >
//         <div className="col-md-12 col-lg-12" style={{marginTop: '300px'}}>
//             <div className="row"
//       >
          
//         <div className="col-md-4" style={{borderRightColor: 'white',
//          borderRightWidth: "2px", borderRightStyle: 'inset'}}>
//             <h3 style={{color: 'white', fontWeight: 'bold'}}>Quick Links</h3>
//             <ul style={{listStyle: "none"}}>
//             <li style={{color: 'white', fontWeight: 'bold'}}>About AHPO</li>
//             <li style={{color: 'white', fontWeight: 'bold'}}> Our members</li>
//             <li style={{color: 'white', fontWeight: 'bold'}}> Our Services</li>
//             <li style={{color: 'white', fontWeight: 'bold'}}> Latest News </li>
//             <li style={{color: 'white', fontWeight: 'bold'}}>Get in touch</li>
//             </ul>
//         </div>

//         <div className="col-md-4" style={{borderRightColor: 'white',
//          borderRightWidth: "2px", borderRightStyle: 'inset'}}>
//             <h3 style={{color: "white", fontWeight: 'bold'}} >Get Involved</h3>
//             <ul style={{listStyle: "none"}}>
//                 <li style={{color: 'white', fontWeight: 'bold'}}>About</li>
//                 <li style={{color: 'white', fontWeight: 'bold'}}>Our members</li>
//                 <li style={{color: 'white', fontWeight: 'bold'}}>Our Services</li>
//                 <li style={{color: 'white', fontWeight: 'bold'}}>Our Products</li>
//                 <li style={{color: 'white', fontWeight: 'bold'}}>Contact us</li>
//             </ul>
//         </div>
//         <div className="col-md-4" style={{borderRightColor: 'white',
//          borderRightWidth: "2px", borderRightStyle: 'inset'}}>

//         <h3 style={{color: "white", fontWeight: 'bold'}} >Partner</h3>
//             <ul style={{listStyle: "none"}}>
//                 <li style={{color: 'white', fontWeight: 'bold'}}>Donate</li>
//                 <li style={{color: 'white', fontWeight: 'bold'}}>Sponsorship</li>
//                 <li style={{color: 'white', fontWeight: 'bold'}}></li>
//             </ul>

//             </div>
//         </div>
//         </div>

       
//     </div>



//     <p style={{textAlign: 'center', marginTop: 
//     '100px',clear: 'both', }}>Copyright &copy; 
//     Pan African Health Professionals Organisation(PAHPO). All rights Reserved.
//     </p>

        
//     </div>
// </section>
  );
};

export default FooterComponent;
