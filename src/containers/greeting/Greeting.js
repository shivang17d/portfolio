import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import { style } from "glamor";

import { contactPageData } from "../../portfolio.js";
const ContactData = contactPageData.contactSection;

export default function Greeting(props) {
  const theme = props.theme;

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-image-div">
            <img
              src={require(`../../assests/images/${ContactData["profile_image_path"]}`)}
              alt=""
              style={{ size: "20px" }} />
          </div>
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text">{greeting.title}</h1>
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                <span>I'm </span>
                <span style={{ color: theme.accentColor }}>
                  {greeting.full_name}{" "}
                </span>
                {greeting.subTitle}
              </p>
              <SocialMedia />
              <div className="portfolio-repo-btn-div">


                <br />
                <a {...styles} className="button" href={greeting.resumeLink}>
                  See my Resume
                </a>
                <br/><br/><br/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
