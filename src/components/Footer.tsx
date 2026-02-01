import React from "react";
import logo from "/images/logo.png";
import { SocialIcon } from "react-social-icons";
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer className="bg-blue-900 py-10 px-8 md:px-32 text-blue-200">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
        <div>
          <a
            href="/"
            className="
        navbar-logo basis-4/8 lg:basis-2/8 text-left
        leading-none flex flex-row gap-2 align-middle "
          >
            <img
              src={logo}
              alt="logo Budowa Pro"
              className="w-15 object-contain"
            />
            <p className="font-bold text-white self-center">
              Budowa Pro <br />
              <span className="text-xs font-normal">
                Twój partner w budownictwie
              </span>
            </p>
          </a>
          <p className="text-sm mt-5">
            Profesjonalne usługi budowlane i remontowe z ponad 15-letnim
            doświadczeniem. Kompleksowa realizacja projektów od A do Z.
          </p>
          <div className="footer-social flex flex-row gap-2 py-5">
            <SocialIcon url="www.facebook.com" />
            <SocialIcon url="www.instagram.com" />
            <SocialIcon url="www.linkedin.com" />
          </div>
        </div>
        <div className="flex flex-col gap-5 text-sm">
          <p className="text-white text-lg font-bold">Szybkie linki</p>
          <a href="/">Strona główna</a>
          <a href="/o-nas">O nas</a>
          <a href="/uslugi">Usługi</a>
          <a href="/realizacje">Realizacje</a>
          <a href="/kontakt">Kontakt</a>
        </div>
        <div>
          <p className="text-white text-lg font-bold">Nasze usługi</p>
          <ul className="mt-5 normal text-sm">
            <li>Budowa domów</li>
            <li>Wykończenia wnętrz</li>
            <li>Remonty</li>
            <li>Prace elewacyjne</li>
            <li>Docieplenia budynków</li>
            <li>Projekty indywidualne</li>
          </ul>
        </div>
        <div>
          <p className="text-white text-lg font-bold">Kontakt</p>
          <div className="flex flex-col gap-2 py-5">
            <div className="flex flex-row gap-2 items-center ">
              <MapPinIcon className="size-5 text-orange-500" />
              <p>ul. Budowlana 15 00-001 Warszawa</p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <PhoneIcon className="size-5 text-orange-500" />
              <a className="hover:text-orange-500" href="tel:+48123123123">
                +48 123 123 123
              </a>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <EnvelopeIcon className="size-5 text-orange-500" />
              <a
                className="hover:text-orange-500"
                href="mailto:kontakt@budowapro.pl"
              >
                kontakt@budowapro.pl
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <p className="text mt-5">&copy; Copyright 2026</p>
    </footer>
  );
}
