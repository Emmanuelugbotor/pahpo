import AboutCard from './aboutCard';

const AboutContainer=()=>{
    return (

    <div className="container row">

    <AboutCard heading=" Research, Innovation and Discovery" body="
    Join our research team as a young or an experienced researcher.
    Are you an African origin living abroad or in Africa and you 
    want to contribute to Africa development through research,
    innovation and discovery,  then join our train of
    research team. There is nothing without something, AHPO Research Team.
    " />
    <div style={{margin: '20px'}}>

    <h4><b>Humanitarian Activities  </b>  </h4>

    <p>Explore our heart of unlimited kindness to the poor and vulnerables  through donations and emergency healthcare services across Africa.</p>
    </div>
    
    <AboutCard heading="CourseMed" body="
    Covid-19 change our world forever. Enjoy up to 5 free online courses
    (professional development courses- PDC) eligible for Continuing Education Units,
    CEU every year as a member. These courses are accredited/approved by various medical 
    bodies across African countries. That is, you can use the certificate acquire from AHPO to renew your licences every year.
    " />
    
    <div style={{margin: '20px'}}>

    <h4><b> TeleMed  </b>  </h4>

    <p>
The future of medicine and emergency health response. Talk/chat with our medical experts for quick and emergency healthcare services from cities to the remote area across African countries.
Free access to Telemed for all members.
    </p>
    </div>

    <AboutCard heading="Health and Peace" body="
     Because of Africa complex multi-ethnic nature, contemporary Africa abounds 
     with problems related to ethnicity or tribalism. As healthcare personnel,
      we must play a neutral role to bring stable peace to Africa. Thus,
      use your neutral position to facilitate peace across regions and countries in Africa.
    " />

    
<div style={{margin: '20px'}}>

<h4><b> Health and Climate Change  </b>  </h4>

<p>
A healthy environment promotes healthy living. Mother nature is evolving and 
several consequences are unfolding, from various form of cancers to birth defect,
global warming and environmental disasters. 
</p>
<p>
Get Involved by becoming a member and join the train of research and discoveries
</p>
</div>



    </div>
    )
}

export default AboutContainer;