import React from "react";
import { ImGithub } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_sub_container">
        <Link to="https://github.com/vaishnaviie/ever-bloom" target="_blank">
          <ImGithub style={{ color: "black ", cursor: "pointer" }} />
        </Link>

        <Link to="https://twitter.com/Vaishnavvie" target="_blank">
          <BsTwitter style={{ color: "black ", cursor: "pointer" }} />
        </Link>

        <Link
          to="https://www.linkedin.com/in/vaishnavi-parate-9884b5204"
          target="_blank"
        >
          <SiLinkedin style={{ color: "black ", cursor: "pointer" }} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
