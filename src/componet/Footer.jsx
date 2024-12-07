import React from "react";
import "../assets/css/styles.css";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer>
      <p>&#9400; {year} Stickify. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
