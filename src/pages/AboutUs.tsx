import React from "react";
import crewImage from "/images/crew.jpg";
import {
  CheckCircleIcon,
  ClockIcon,
  ShieldCheckIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import SubpageHeader from "../components/SubpageHeader";

export default function AboutUs() {
  return (
    <main>
      <SubpageHeader>
        <h1 className="text-5xl text-white text-center font-bold">O nas</h1>
      </SubpageHeader>
      <section className="flex flex-col lg:flex-row gap-15 bg-gray-100">
        <div data-aos="fade-up" className="basis-1/2">
          <div className="sticky top-40">
            <img
              src={crewImage}
              alt="Zdjęcie zespołu"
              className="rounded-xl shadow-2xl"
            />
            <div className="text-center p-5 shadow-2xl rounded-md absolute -right-5 -bottom-5 bg-orange-500 text-white">
              <span className="font-bold text-6xl">15+</span> <br />
              <span>Lat na rynku</span>
            </div>
          </div>
        </div>
        <div className="basis-1/2">
          <span data-aos="fade-up" className="title-extras">
            O firmie
          </span>
          <h2 data-aos="fade-up" data-aos-delay="150">
            Profesjonalizm i doświadczenie w każdym projekcie
          </h2>
          <p data-aos="fade-up" data-aos-delay="250" className="text">
            BudowaPro to firma z ponad 15-letnim doświadczeniem w branży
            budowlanej. Specjalizujemy się w kompleksowej realizacji projektów
            budowlanych i remontowych dla klientów indywidualnych oraz
            biznesowych.
          </p>
          <p data-aos="fade-up" data-aos-delay="350" className="text">
            Naszą misją jest tworzenie przestrzeni, które łączą funkcjonalność z
            estetyką, przy zachowaniu najwyższych standardów jakości i
            terminowości. Każdy projekt traktujemy indywidualnie, dbając o
            najmniejsze detale.
          </p>
          <div
            data-aos="fade-up"
            data-aos-delay="450"
            className="grid grid-flow-col grid-rows-2 gap-10"
          >
            <div className="flex flex-row gap-3">
              <ShieldCheckIcon className="size-10 min-w-9 text-orange-500 bg-blue-900 rounded-md p-1" />
              <p className="text-sm text-gray-600">
                <span className="text-lg text-blue-900 font-bold">
                  Gwarancja jakości
                </span>{" "}
                <br />
                Wszystkie prace objęte są gwarancją, a ich jakość jest dla nas
                najważniejsza.
              </p>
            </div>
            <div className="flex flex-row gap-3">
              <ClockIcon className="size-10 min-w-9  text-orange-500 bg-blue-900 rounded-md p-1" />
              <p className="text-sm text-gray-600">
                <span className="text-lg text-blue-900 font-bold">
                  Terminowość
                </span>{" "}
                <br />
                Dotrzymujemy ustalonych terminów i dbamy o płynny przebieg
                realizacji.
              </p>
            </div>
            <div className="flex flex-row gap-3">
              <UsersIcon className="size-10 min-w-9  text-orange-500 bg-blue-900 rounded-md p-1" />
              <p className="text-sm text-gray-600">
                <span className="text-lg text-blue-900 font-bold">
                  Doświadczony zespół
                </span>{" "}
                <br />
                Nasz zespół to fachowcy z wieloletnim doświadczeniem w branży.
              </p>
            </div>
            <div className="flex flex-row gap-3">
              <CheckCircleIcon className="size-10 min-w-9  text-orange-500 bg-blue-900 rounded-md p-1" />
              <p className="text-sm text-gray-600">
                <span className="text-lg text-blue-900 font-bold">
                  Gwarancja jakości
                </span>{" "}
                <br />
                Kompleksowa obsługa
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
