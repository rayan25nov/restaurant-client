import React from "react";
import Styles from "./Footer.module.css"; // Import your CSS module
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.footerLinks}>
        <ul>
          <li>
            <Link to={"/aboutus"}>About us</Link>
          </li>
          <li>
            <Link to={"/termsofuse"}>Terms of Use</Link>
          </li>
          <li>
            <Link to={"/ourservices"}>Our services</Link>
          </li>
          <li>
            <Link to={"/privacypolicy"}>Privacy policy</Link>
          </li>
        </ul>
      </div>
      <div className={Styles.footerLinks}>
        <ul>
          <li>
            <Link to={"/security"}>Security</Link>
          </li>
          <li>
            <Link to={"/paymentoptions"}>Payment options</Link>
          </li>
          <li>
            <Link to={"/advertise"}>Advertise With Us</Link>
          </li>
          <li>
            <Link to={"adsinfo"}>Ads Info</Link>
          </li>
        </ul>
      </div>
      <div className={Styles.footerLinks}>
        <div className={Styles.SocialLinks}>
          <div className={Styles.social_icons}>
            <div className={Styles.icon}>
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </div>
            <div className={Styles.icon}>
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </div>
            <div className={Styles.icon}>
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </div>
          </div>
        </div>
      </div>
      <section className={Styles.contactSection}>
        <h2>Contact Us</h2>
        <form className={Styles.contactForm}>
          <div className={Styles.formGroup}>
            <input type="text" name="name" placeholder="Name" />
          </div>
          <div className={Styles.formGroup}>
            <input type="email" name="email" placeholder="Email" />
          </div>
          <div className={Styles.formGroup}>
            <input type="text" name="subject" placeholder="Subject" />
          </div>
          <div className={Styles.formGroup}>
            <textarea
              name="message"
              rows="4"
              placeholder="Message"
              required
            ></textarea>
          </div>
          <button type="submit" className={Styles.submitButton}>
            Send
          </button>
        </form>
      </section>

      <p className={Styles.copyRight}>
        © 2023 All rights reserved | Restaurant Management System
      </p>
    </footer>
  );
};

export default Footer;
