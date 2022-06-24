import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import "./social.css";

export default function SocialHeader() {
  return (
    <>
      <center>
        <div id="google_translate_element"></div>
      </center>

      <section className="social">
        <ul className="social_left">
          {/* <li>
          <MailOutlineIcon className="social-icon" />
          <a href="mailto:admin@pahpo.org"> admin@pahpo.org</a>
        </li>
        <li>
          <PhoneEnabledIcon className="social-icon" />
          <a href="tel:+234 803 041 9009"> +234 803 041 9009</a>
        </li> */}
        </ul>
        <ul className="social_right">
          <li>
            <a
              href="https://www.facebook.com/medicalhealthprofessionals/"
              target="_blank"
            >
              <FacebookIcon className="facebook social-icon" />
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/pan-african-health-professionals-organisation-pahpo-26aa14219"
              target="_blank"
            >
              <LinkedInIcon className="linkedin social-icon" />
            </a>
          </li>

          <li>
            <a
              href="https://www.youtube.com/channel/UCuduVThNbotlSR17CZXy-6g"
              target="_blank"
            >
              <YouTubeIcon className="youtube social-icon" />
            </a>
          </li>

          <li>
            <a href="https://www.twitter.com/PAHPO_NGO" target="_blank">
              <TwitterIcon className="twitter" />
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}
