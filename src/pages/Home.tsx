import { ArrowRightIcon, CheckIcon } from "@heroicons/react/16/solid";
import {
  BriefcaseIcon,
  TrophyIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import React from "react";

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
    </main>
  );
}
