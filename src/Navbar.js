import React, { useEffect, useState } from "react";
import logo from "./accets/logo.png";
import avatar from "./accets/avatar.png";
import "./Navbar.css";

const Navbar = () => {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
      return () => {
        window.removeEventListener("scroll");
      };
    });
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <a href="/">
        <img className="nav__logo" src={logo} alt="wanda" />
      </a>
      <img className="nav__avatar" src={avatar} alt="avatar" />
    </div>
  );
};

export default Navbar;
