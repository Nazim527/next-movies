import Link from "next/link";
import {FaPlayCircle} from 'react-icons/fa'
import React from "react";

import './style.css'

const Header = () => {
  return (
    <header className={"header container fluid"}>
      <div className="headerWrapper">
        <Link href="/"  className="logo">
            <FaPlayCircle/> NETFILMS
        </Link>
        <nav className="navigationMenu">
            <Link href={"/"}>Movies</Link>
            <Link href={"/"}>Series</Link>
            <Link href={"/"}>Kids</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
