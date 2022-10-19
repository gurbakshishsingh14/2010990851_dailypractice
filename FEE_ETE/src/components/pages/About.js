import React, { useEffect } from "react";
import {
  AiOutlinePoweroff,
  AiFillHeart,
  AiOutlineFileDone,
  AiTwotoneHighlight,
  AiFillSafetyCertificate,
  AiFillTool,
} from "react-icons/ai";

const About = () => {
  useEffect(() => {
    document.title = "About Us ";
  }, []);

  return (
    <>
      <div className="container-fluid text-center">
        <h2>About</h2>
        <h4>What we offer</h4>
        <br />
        <div className="row">
          <div className="col-sm-4">
            <span
              className="glyphicon glyphicon-off logo-small"
              style={{ color: "#f4511e", fontSize: "50px" }}
            >
              <AiOutlinePoweroff />
            </span>
            <h4>POWER</h4>
            <p>Lorem ipsum dolor sit amet..</p>
          </div>
          <div className="col-sm-4">
            <span
              className="glyphicon glyphicon-heart logo-small"
              style={{ color: "#f4511e", fontSize: "50px" }}
            >
              <AiFillHeart />
            </span>
            <h4>LOVE</h4>
            <p>Lorem ipsum dolor sit amet..</p>
          </div>
          <div className="col-sm-4">
            <span
              className="glyphicon glyphicon-lock logo-small"
              style={{ color: "#f4511e", fontSize: "50px" }}
            >
              <AiOutlineFileDone />
            </span>
            <h4>FOCUS</h4>
            <p>Lorem ipsum dolor sit amet..</p>
          </div>
        </div>
        <br></br>
        <div className="row">
          <div className="col-sm-4">
            <span className="glyphicon glyphicon-leaf logo-small">
              <AiTwotoneHighlight />
            </span>
            <h4>STRENGTH</h4>
            <p>Lorem ipsum dolor sit amet..</p>
          </div>
          <div className="col-sm-4">
            <span className="glyphicon glyphicon-certificate logo-small">
              <AiFillSafetyCertificate />
            </span>
            <h4>CERTIFACTION</h4>
            <p>Lorem ipsum dolor sit amet..</p>
          </div>
          <div className="col-sm-4">
            <span className="glyphicon glyphicon-wrench logo-small">
              <AiFillTool />
            </span>
            <h4 style={{ color: "#303030" }}>HARD WORK</h4>
            <p>Lorem ipsum dolor sit amet..</p>
          </div>
        </div>
      </div>
      <div>
        <div id="bio">
          <h1>About Us</h1>
          <div className="line"></div>
          <p class="mb-0 text-black-50">The Garnet Society provides great feedback about ideas that College Relations has about engaging new graduates. For our Seniors, I often use them as a sounding board about how to engage them and what they'd like to see when they graduate.
                  I've found they are very candid about what they like, and will certainly let you know if something won't work. 
                  A great example of how TGS helped bridge the gap between students and alumni is participating in the college's 24-hour fundraising challenge. In 2018 they helped table all day long in the campus center, and engaged directly with their
                  student peers about why they should support the college</p>
        </div>
      </div>
    </>
  );
};

export default About;
