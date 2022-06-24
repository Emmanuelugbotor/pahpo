import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function SocialsM() {
  return (
    <>
      <button id="whatsapp" class="whatsapp s-icon">
        <a href="https://wa.me/2348030419009">
          <img src="/images/whatsapp_business.jpg" alt="" />
        </a>
      </button>

      {/* <button class=" s-icon">
      <a href="https://wa.me/2348030419009">
        <i class="fa fa-whatsapp" style="font-size: 50px; color: white"></i>
      </a>
    </button> */}
      <li className="twitter-icon-html">
        <a
          href="https://www.facebook.com/medicalhealthprofessionals/"
          target={"_blank"}
        >
          <FacebookIcon className="facebook social-icon size" />
        </a>
      </li>
      <li className="ig-icon-html">
        <a
          href="https://www.linkedin.com/in/pan-african-health-professionals-organisation-pahpo-26aa14219"
          target="_blank"
        >
          <LinkedInIcon className="linkedin social-icon size" />
        </a>
      </li>
    </>
  );
}
