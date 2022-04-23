import React from "react";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterCircle,
  AiOutlineInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="copy">
        Designed by{" "}
        <a
          href="https://github.com/mucahittasan"
          target="_blank"
          rel="noreferrer"
        >
          Mucahit Tasan
        </a>
      </div>
      <div className="social">
        <a
          href="https://linkedin.com/in/mucahittasan"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin />
        </a>
        <a
          href="https://github.com/mucahittasan"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub />
        </a>
        <a
          href="https://twitter.com/MurattTasan"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillTwitterCircle />
        </a>
        <a
          href="https://instagram.com/tasanmucahit"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineInstagram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
