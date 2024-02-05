import React from "react";
import './style.css'
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      Made with ❤️ by&nbsp;
      <Link href="https://github.com/Nazim527" target="_blank">
        Nazim rzayev
      </Link>
    </footer>
  );
};

export default Footer;
