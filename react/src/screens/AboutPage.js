
import Nav from '../components/Navbar/navBar';
import Footer from '../components/Footer/footer'
import AboutContainer from '../components/AboutContainer';


 
const AboutScreen=()=>{ 
    return (
        <>
        <div className="" style={{ backgroundImage: 'url('+ "images/bg_aboutP.jpg" +')', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' , height: '450px' }} >
        <Nav />
        <center> <h2 style={{marginTop: '100px', color: 'white'}}>ABOUT PAHPO</h2> </center>
       </div>
       
       <AboutContainer />
       <Footer />
       </>
    )
}

export default AboutScreen