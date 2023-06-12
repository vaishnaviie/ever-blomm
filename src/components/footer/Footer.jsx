import React from "react";
import { ImGithub } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_sub_container">
        <ImGithub style={{ color: "black ", cursor: "pointer" }} />
        <BsTwitter style={{ color: "black ", cursor: "pointer" }} />
        <SiLinkedin style={{ color: "black ", cursor: "pointer" }} />
      </div>
    </div>
  );
};

export default Footer;
