import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/navbar.css";
import { Bars3Icon, PhoneIcon, XMarkIcon } from "@heroicons/react/16/solid";
import logo from "/images/logo.png";

export default function Navbar() {
  const [navBarExpanded, setNavBarExpanded] = useState(false);
  return (
    <nav className="flex fixed shadow-md flex-row w-full py-8 px-8 md:px-32 text-center z-10 bg-white items-center">
      <a
        href="/"
        className="
        navbar-logo basis-4/8 lg:basis-2/8 text-left
        leading-none flex flex-row gap-2 align-middle "
      >
        <img src={logo} alt="logo Budowa Pro" className="w-15 object-contain" />
        <p className="font-bold text-orange-500 self-center">
          Budowa Pro <br />
          <span className="text-xs font-normal">
            Twój partner w budownictwie
          </span>
        </p>
      </a>
      <div
        onClick={() => setNavBarExpanded(!navBarExpanded)}
        className="basis-4/8 lg:hidden justify-end flex"
      >
        {!navBarExpanded ? (
          <Bars3Icon className="size-6 text-gray-800" />
        ) : (
          <XMarkIcon className="size-6 text-gray-800" />
        )}
      </div>
      <div
        className={`${navBarExpanded ? "active" : ""}
        navbar-links basis-4/8 -z-1 transition-all duration-500 top-0
        -left-full [.active]:left-0 fixed flex flex-col h-screen bg-white/80 gap-10 w-screen items-center justify-center
        lg:h-auto lg:static lg:block`}
        onClick={() => {
          setNavBarExpanded(false);
        }}
      >
        <NavLink
          to="/"
          className="navbar-link text-center text-gray-800 px-3 transition-all"
        >
          Strona Główna
        </NavLink>
        <NavLink
          to="/o-nas"
          className="navbar-link text-center text-gray-800 px-3 transition-all"
        >
          O nas
        </NavLink>
        <NavLink
          to="/uslugi"
          className="navbar-link text-center text-gray-800 px-3 transition-all"
        >
          Usługi
        </NavLink>
        <NavLink
          to="/realizacje"
          className="navbar-link text-center text-gray-800 px-3 transition-all"
        >
          Realizacje
        </NavLink>
        <NavLink
          to="/kontakt"
          className="navbar-link text-center text-gray-800 px-3 transition-all"
        >
          Kontakt
        </NavLink>
      </div>
      <div className="navbar-cta basis-2/8 hidden lg:flex  gap-10">
        <a
          href="tel:+48123213123"
          className="flex gap-2 justify-center text-gray-800/70 hover:text-gray-800 transition-all self-center"
        >
          <PhoneIcon className="size-5 inline-block" />
          123 123 123
        </a>

        <a
          href="/kontakt"
          className="text-white bg-orange-500 rounded-md  px-3 py-2 hover:bg-orange-700 transition-all"
        >
          Zapytaj o wycenę
        </a>
      </div>
    </nav>
  );
}
