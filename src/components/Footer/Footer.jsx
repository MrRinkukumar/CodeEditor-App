import React from "react";
import "./Footer.css";
import { BsFacebook, BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <p> &copy; 2023 Unit Calculator. All Rights Reserved.</p>
        </div>
        <div className="footer-right">
          <ul>
            <li>
              <a
                target="_blank"
                rel="on noreferrer"
                href="https://www.facebook.com/profile.php?id=100091735276122&mibextid=ZbWKwL"
              >
                <BsFacebook />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://instagram.com/huntigbrother?igshid=ZGUzMzM3NWJiOQ=="
                rel="noreferrer"
              >
                <BsInstagram />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://github.com/MrRinkukumar"
                rel="noreferrer"
              >
                <BsGithub />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/mr-rinku-kumar-saini-52a164220"
                rel="noreferrer"
              >
                <BsLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
