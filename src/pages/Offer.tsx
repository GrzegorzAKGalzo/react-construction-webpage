import React from "react";
import SubpageHeader from "../components/SubpageHeader";
import {
  BuildingOffice2Icon,
  CheckCircleIcon,
  ClockIcon,
  HomeModernIcon,
  PaintBrushIcon,
  ShieldCheckIcon,
  UsersIcon,
  WrenchIcon,
} from "@heroicons/react/24/outline";

export default function Offer() {
  return (
    <main>
      <SubpageHeader>
        <h1 className="text-5xl text-white text-center font-bold">Usługi</h1>
      </SubpageHeader>
      <section className="text-center">
        <span data-aos="fade-up" className="title-extras">
          Nasze usługi
        </span>
        <h2>Kompleksowe usługi budowlane</h2>
        <p data-aos="fade-up" className="text">
          Oferujemy pełen zakres usług budowlanych i remontowych. <br />
          Każdy projekt realizujemy z dbałością o najwyższe standardy jakości i
          terminowość.
        </p>
        <div className="flex shrink flex-wrap flex-row gap-5 justify-center align-middle">
          <article
            data-aos="fade-up"
            className="min-w-[400px] max-w-1/3 shadow-xs border-2 border-gray-200 rounded-xl text-left hover:shadow-lg transition-all"
          >
            <div
              className="p-5 flex bg-no-repeat bg-size-[100%] bg-center min-h-50 rounded-t-lg text-white font-bold text-2xl justify-end flex-col hover:bg-size-[110%] transition-all"
              style={{
                backgroundImage:
                  "linear-gradient(to top, var(--color-blue-900) , var(--color-blue-900) 0%, color-mix(in srgb, var(--color-blue-500) 0%, transparent)), url('/images/budowa.jpg')",
              }}
            >
              <HomeModernIcon className="size-15 p-3 bg-orange-500 rounded-xl" />
              Budowa domów
            </div>
            <div className="px-5 py-10">
              <p className="text">
                Kompleksowa budowa domów jednorodzinnych od fundamentów po dach.
                Realizujemy projekty indywidualne oraz katalogowe.
              </p>
              <ul className="text-gray-600">
                <li>Domy jednorodzinne</li>
                <li>Domy wielorodzinne</li>
                <li>Projekty indywidualne</li>
                <li>Budowa pod klucz</li>
              </ul>
              <a href="" className="btn-outline">
                Zapytaj o szczegóły
              </a>
            </div>
          </article>
          <article
            data-aos="fade-up"
            className="min-w-[400px] max-w-1/3 shadow-xs border-2 border-gray-200 rounded-xl text-left hover:shadow-lg transition-all"
          >
            <div
              className="p-5 flex bg-no-repeat bg-size-[100%] bg-center min-h-50 rounded-t-lg text-white font-bold text-2xl justify-end flex-col hover:bg-size-[110%] transition-all"
              style={{
                backgroundImage:
                  "linear-gradient(to top, var(--color-blue-900) , var(--color-blue-900) 0%, color-mix(in srgb, var(--color-blue-500) 0%, transparent)), url('/images/kuchnia.jpg')",
              }}
            >
              <PaintBrushIcon className="size-15 p-3 bg-orange-500 rounded-xl" />
              Wykończenia wnętrz
            </div>
            <div className="px-5 py-10">
              <p className="text">
                Profesjonalne wykończenie mieszkań i domów. Od tynków przez
                układanie płytek, malowanie po montaż sufitów podwieszanych.
              </p>
              <ul className="text-gray-600">
                <li>Tynki gipsowe i cementowe</li>
                <li>Układanie płytek</li>
                <li>Malowanie i tapetowanie</li>
                <li>Sufity podwieszane</li>
              </ul>
              <a href="" className="btn-outline">
                Zapytaj o szczegóły
              </a>
            </div>
          </article>
          <article
            data-aos="fade-up"
            className="min-w-[400px] max-w-1/3 shadow-xs border-2 border-gray-200 rounded-xl text-left hover:shadow-lg transition-all"
          >
            <div
              className="p-5 flex bg-no-repeat bg-size-[100%] bg-center min-h-50 rounded-t-lg text-white font-bold text-2xl justify-end flex-col hover:bg-size-[110%] transition-all"
              style={{
                backgroundImage:
                  "linear-gradient(to top, var(--color-blue-900) , var(--color-blue-900) 0%, color-mix(in srgb, var(--color-blue-500) 0%, transparent)), url('/images/dom.jpg')",
              }}
            >
              <WrenchIcon className="size-15 p-3 bg-orange-500 rounded-xl" />
              Remonty
            </div>
            <div className="px-5 py-10">
              <p className="text">
                Kompleksowe remonty mieszkań, domów i obiektów komercyjnych.
                Modernizacje i adaptacje pomieszczeń.
              </p>
              <ul className="text-gray-600">
                <li>Remonty mieszkań</li>
                <li>Remonty domów</li>
                <li>Remonty biur</li>
                <li>Modernizacje</li>
              </ul>
              <a href="" className="btn-outline">
                Zapytaj o szczegóły
              </a>
            </div>
          </article>
          <article
            data-aos="fade-up"
            className="min-w-[400px] max-w-1/3 shadow-xs border-2 border-gray-200 rounded-xl text-left hover:shadow-lg transition-all"
          >
            <div
              className="p-5 flex bg-no-repeat bg-size-[100%] bg-center min-h-50 rounded-t-lg text-white font-bold text-2xl justify-end flex-col
               hover:bg-size-[110%] transition-all"
              style={{
                backgroundImage:
                  "linear-gradient(to top, var(--color-blue-900) , var(--color-blue-900) 0%, color-mix(in srgb, var(--color-blue-500) 0%, transparent)), url('/images/hero.jpg')",
              }}
            >
              <BuildingOffice2Icon className="size-15 p-3 bg-orange-500 rounded-xl" />
              Prace elewacyjne
            </div>
            <div className="px-5 py-10">
              <p className="text">
                Docieplenia, tynki zewnętrzne, malowanie elewacji. Kompleksowe
                prace nad wyglądem zewnętrznym budynku.
              </p>
              <ul className="text-gray-600">
                <li>Docieplanie budynków</li>
                <li>Tynki elewacyjne</li>
                <li>Malowanie elewacji</li>
                <li>Kamienie dekoracyjne</li>
              </ul>
              <a href="" className="btn-outline">
                Zapytaj o szczegóły
              </a>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
