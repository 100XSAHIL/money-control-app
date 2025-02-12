import React from "react";
import "../Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h6 className="footer-text">All rights reserved &copy; Sahil with ❤️</h6>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/sahil-mishra-038778271/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100026323020396"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/sahilallegedly/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
