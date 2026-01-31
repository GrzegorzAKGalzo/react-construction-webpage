import { ArrowRightIcon, CheckIcon } from "@heroicons/react/16/solid";
import {
  BriefcaseIcon,
  CheckCircleIcon,
  ClockIcon,
  TrophyIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import crewImage from "/images/crew.jpg";
import { ShieldCheckIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <main>
      <section
        className="h-screen bg-center bg-cover bg-no-repeat text-white justify-center flex flex-col relative"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-blue-900) , var(--color-blue-900) 10%, color-mix(in srgb, var(--color-blue-500) 70%, transparent)), url('/images/hero.jpg')",
        }}
        id="hero"
      >
        <div className="max-w-5xl">
          <div
            className="bg-orange-500/20 border-orange-500 text-orange-400
          border rounded-full w-fit py-2 px-4 flex flex-row items-center justify-center"
          >
            <CheckIcon className="size-5" /> Ponad 15 lat doświadczenia
          </div>
          <h1 className="text-2xl md:text-7xl font-bold py-3">
            Budujemy{" "}
            <span className="text-orange-500">
              Twoje <br />
              Marzenia
            </span>
          </h1>
          <p className="text-md md:text-xl">
            Profesjonalne usługi budowlane i remontowe dla klientów
            indywidualnych oraz biznesowych. Od projektu po klucz – kompleksowa
            realizacja Twoich inwestycji.
          </p>
          <div className="flex flex-row gap-10 py-5">
            <a href="" className="btn-primary">
              Bezpłatna wycena <ArrowRightIcon className="size-5" />
            </a>
            <a href="" className="btn-white">
              Zobacz realizacje
            </a>
          </div>
          <div className="flex flex-row flex-wrap gap-5">
            <div className="bg-gray-200/10 w-fit backdrop-blur-2xl py-5 px-5 rounded-lg hover:-translate-y-1 transition-all">
              <div className="flex flex-row gap-5 items-center">
                <TrophyIcon className="size-15 bg-orange-500 border-box p-3 text-white rounded-md" />
                <div>
                  <p className="font-bold text-2xl">500+</p>
                  <p>Zrealizowanych projektów</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-200/10 w-fit backdrop-blur-2xl py-5 px-5 rounded-lg hover:-translate-y-1 transition-all">
              <div className="flex flex-row gap-5 items-center">
                <UsersIcon className="size-15 bg-orange-500 border-box p-3 text-white rounded-md" />
                <div>
                  <p className="font-bold text-2xl">450+</p>
                  <p>Zadowolonych klientów</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-200/10 w-fit backdrop-blur-2xl py-5 px-5 rounded-lg hover:-translate-y-1 transition-all">
              <div className="flex flex-row gap-5 items-center">
                <BriefcaseIcon className="size-15 bg-orange-500 border-box p-3 text-white rounded-md" />
                <div>
                  <p className="font-bold text-2xl">15+</p>
                  <p>Lat doświadczenia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
