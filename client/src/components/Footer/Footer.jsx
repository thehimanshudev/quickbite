import React from "react";
import "./Footer.css";
import { assets } from "../../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            QuickBite is a modern restaurant application that connects food
            lovers with their favorite cuisines. Discover menus, order online,
            reserve tables, and enjoy seamless dining experiences. With
            real-time updates, personalized recommendations, and easy
            navigation, QuickBite makes dining convenient, enjoyable, and
            hassle-free for customers while helping restaurants serve better.
          </p>
          <div className="footer-social-icons">
            <a href="https://www.github.com/thehimanshudev" target="_blank">
              {" "}
              <img
                src={assets.github}
                alt=""
                style={{ background: "#fff", borderRadius: "50%" }}
              />
            </a>
            <img src={assets.twitter_icon} alt="" />
            <a href="" target="_blank">
              <img src={assets.linkedin_icon} alt="" />
            </a>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get in touch</h2>
          <ul>
            <li>+91 816 808 7734</li>
            <li>contact@Himanshu.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p>Developed by Himanshu</p>
      <p className="footer-copyright">
        Copyright 2025 @ QuickBite.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
