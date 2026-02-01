import React, { useState } from "react";
import SubpageHeader from "../components/SubpageHeader";
import { MapPinIcon } from "@heroicons/react/24/outline";

export default function Porfolio() {
  enum Categories {
    all,
    build,
    finish,
    renovation,
    elevation,
  }
  const [category, setCategory] = useState<Categories>(Categories.all);
  return (
    <main>
      <SubpageHeader>
        <h1 className="text-5xl text-white text-center font-bold">
          Realizacje
        </h1>
      </SubpageHeader>
      <section className="bg-gray-100 text-center">
        <span data-aos="fade-up" className="title-extras">
          NASZE REALIZACJE
        </span>
        <h2>Portfolio projektów</h2>
        <p data-aos="fade-up" className="text">
          Poznaj wybrane realizacje z naszego portfolio. Każdy projekt to dowód
          naszego zaangażowania i profesjonalizmu.
        </p>
        <div
          data-aos="fade-up"
          className="flex flex-row gap-5 justify-center flex-wrap"
        >
          <div
            className={`${category === Categories.all ? "active" : " "} portfolio-btn`}
            onClick={() => setCategory(Categories.all)}
          >
            Wszystkie
          </div>
          <div
            className={`${category === Categories.build ? "active" : " "} portfolio-btn`}
            onClick={() => setCategory(Categories.build)}
          >
            Budowa domów
          </div>
          <div
            className={`${category === Categories.finish ? "active" : " "} portfolio-btn`}
            onClick={() => setCategory(Categories.finish)}
          >
            Wykończenia
          </div>
          <div
            className={`${category === Categories.renovation ? "active" : " "} portfolio-btn`}
            onClick={() => setCategory(Categories.renovation)}
          >
            Remoty
          </div>
          <div
            className={`${category === Categories.elevation ? "active" : " "} portfolio-btn`}
            onClick={() => setCategory(Categories.elevation)}
          >
            Elewacje
          </div>
        </div>
        <div className="mt-10 flex-wrap flex flex-row gap-5 justify-center">
          <a
            href=""
            className={`${category == Categories.all || category == Categories.build ? "" : "hidden"}`}
          >
            <article
              data-aos="fade-up"
              className="min-w-[400px] bg-white max-w-1/3 shadow-xs border-2 border-gray-200 rounded-xl text-left hover:shadow-lg transition-all group"
            >
              <div className="bg-[url('/images/kuchnia.jpg')] p-5 flex bg-no-repeat bg-size-[100%] bg-center min-h-50 rounded-t-lg text-white font-bold items-end flex-col hover:bg-size-[110%] transition-all">
                <span className="bg-orange-500 rounded-md px-1 shadow-md">
                  2026
                </span>
              </div>
              <div className="px-5 py-5 ">
                <h4 className="text-xl text-blue-900 font-bold group-hover:text-orange-500">
                  Dom jednorodzinny w Warszawie
                </h4>
                <p className="text">Nowoczesny dom o powierzchni 180m²</p>
                <p className="text flex items-center gap-2">
                  <MapPinIcon className="size-5" />
                  Warszawa
                </p>
              </div>
            </article>
          </a>
          <a
            href=""
            className={`${category == Categories.all || category == Categories.finish ? "" : "hidden"}`}
          >
            <article
              data-aos="fade-up"
              className="min-w-[400px] bg-white max-w-1/3 shadow-xs border-2 border-gray-200 rounded-xl text-left hover:shadow-lg transition-all group"
            >
              <div className="bg-[url('/images/budowa.jpg')] p-5 flex bg-no-repeat bg-size-[100%] bg-center min-h-50 rounded-t-lg text-white font-bold items-end flex-col hover:bg-size-[110%] transition-all">
                <span className="bg-orange-500 rounded-md px-1 shadow-md">
                  2026
                </span>
              </div>
              <div className="px-5 py-5 ">
                <h4 className="text-xl text-blue-900 font-bold group-hover:text-orange-500">
                  Dom jednorodzinny w Warszawie
                </h4>
                <p className="text">Nowoczesny dom o powierzchni 180m²</p>
                <p className="text flex items-center gap-2">
                  <MapPinIcon className="size-5" />
                  Warszawa
                </p>
              </div>
            </article>
          </a>
          <a
            href=""
            className={`${category == Categories.all || category == Categories.renovation ? "" : "hidden"}`}
          >
            <article
              data-aos="fade-up"
              className="min-w-[400px] bg-white max-w-1/3 shadow-xs border-2 border-gray-200 rounded-xl text-left hover:shadow-lg transition-all group"
            >
              <div className="bg-[url('/images/hero.jpg')] p-5 flex bg-no-repeat bg-size-[100%] bg-center min-h-50 rounded-t-lg text-white font-bold items-end flex-col hover:bg-size-[110%] transition-all">
                <span className="bg-orange-500 rounded-md px-1 shadow-md">
                  2026
                </span>
              </div>
              <div className="px-5 py-5 ">
                <h4 className="text-xl text-blue-900 font-bold group-hover:text-orange-500">
                  Dom jednorodzinny w Warszawie
                </h4>
                <p className="text">Nowoczesny dom o powierzchni 180m²</p>
                <p className="text flex items-center gap-2">
                  <MapPinIcon className="size-5" />
                  Warszawa
                </p>
              </div>
            </article>
          </a>
          <a
            href=""
            className={`${category == Categories.all || category == Categories.build ? "" : "hidden"}`}
          >
            <article
              data-aos="fade-up"
              className="min-w-[400px] bg-white max-w-1/3 shadow-xs border-2 border-gray-200 rounded-xl text-left hover:shadow-lg transition-all group"
            >
              <div className="bg-[url('/images/budowa.jpg')] p-5 flex bg-no-repeat bg-size-[100%] bg-center min-h-50 rounded-t-lg text-white font-bold items-end flex-col hover:bg-size-[110%] transition-all">
                <span className="bg-orange-500 rounded-md px-1 shadow-md">
                  2026
                </span>
              </div>
              <div className="px-5 py-5 ">
                <h4 className="text-xl text-blue-900 font-bold group-hover:text-orange-500">
                  Dom jednorodzinny w Warszawie
                </h4>
                <p className="text">Nowoczesny dom o powierzchni 180m²</p>
                <p className="text flex items-center gap-2">
                  <MapPinIcon className="size-5" />
                  Warszawa
                </p>
              </div>
            </article>
          </a>
          <a
            href=""
            className={`${category == Categories.all || category == Categories.renovation ? "" : "hidden"}`}
          >
            <article
              data-aos="fade-up"
              className="min-w-[400px] bg-white max-w-1/3 shadow-xs border-2 border-gray-200 rounded-xl text-left hover:shadow-lg transition-all group"
            >
              <div className="bg-[url('/images/kuchnia.jpg')] p-5 flex bg-no-repeat bg-size-[100%] bg-center min-h-50 rounded-t-lg text-white font-bold items-end flex-col hover:bg-size-[110%] transition-all">
                <span className="bg-orange-500 rounded-md px-1 shadow-md">
                  2026
                </span>
              </div>
              <div className="px-5 py-5 ">
                <h4 className="text-xl text-blue-900 font-bold group-hover:text-orange-500">
                  Dom jednorodzinny w Warszawie
                </h4>
                <p className="text">Nowoczesny dom o powierzchni 180m²</p>
                <p className="text flex items-center gap-2">
                  <MapPinIcon className="size-5" />
                  Warszawa
                </p>
              </div>
            </article>
          </a>
          <a
            href=""
            className={`${category == Categories.all || category == Categories.build ? "" : "hidden"}`}
          >
            <article
              data-aos="fade-up"
              className="min-w-[400px] bg-white max-w-1/3 shadow-xs border-2 border-gray-200 rounded-xl text-left hover:shadow-lg transition-all group"
            >
              <div className="bg-[url('/images/kuchnia.jpg')] p-5 flex bg-no-repeat bg-size-[100%] bg-center min-h-50 rounded-t-lg text-white font-bold items-end flex-col hover:bg-size-[110%] transition-all">
                <span className="bg-orange-500 rounded-md px-1 shadow-md">
                  2026
                </span>
              </div>
              <div className="px-5 py-5 ">
                <h4 className="text-xl text-blue-900 font-bold group-hover:text-orange-500">
                  Dom jednorodzinny w Warszawie
                </h4>
                <p className="text">Nowoczesny dom o powierzchni 180m²</p>
                <p className="text flex items-center gap-2">
                  <MapPinIcon className="size-5" />
                  Warszawa
                </p>
              </div>
            </article>
          </a>
        </div>
      </section>
    </main>
  );
}
