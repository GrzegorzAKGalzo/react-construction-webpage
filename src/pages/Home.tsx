import {
  ArrowRightIcon,
  CheckIcon,
  MapIcon,
  MapPinIcon,
} from "@heroicons/react/16/solid";
import {
  BriefcaseIcon,
  BuildingOffice2Icon,
  CheckCircleIcon,
  ClockIcon,
  EnvelopeIcon,
  HomeModernIcon,
  PaintBrushIcon,
  PhoneIcon,
  TrophyIcon,
  UsersIcon,
  WrenchIcon,
} from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import crewImage from "/images/crew.jpg";
import { ShieldCheckIcon } from "@heroicons/react/24/outline";
import "../css/home.css";

export default function Home() {
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
      <section className="text-center">
        <span data-aos="fade-up" className="title-extras">
          KONTAKT
        </span>
        <h2>Skontaktuj się z nami</h2>
        <p data-aos="fade-up" className="text">
          Masz pytania? Potrzebujesz wyceny? Skontaktuj się z nami już dziś.
          Odpowiemy na wszystkie pytania i pomożemy w realizacji Twojego
          projektu.
        </p>
        <div className="flex justify-center flex-col lg:flex-row px-4 gap-10">
          <div className="w-full max-w-2xl rounded-xl border border-gray-100 shadow-md p-6 md:p-8">
            <p className="text-2xl md:text-3xl text-blue-900 font-bold mb-6">
              Wyślij zapytanie
            </p>

            <form
              action={() => {}}
              className="space-y-5 text-gray-600 text-left"
            >
              {/* Imię i nazwisko */}
              <div>
                <label className="block mb-1">Imię i nazwisko *</label>
                <input
                  type="text"
                  name="name"
                  className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none"
                />
              </div>

              {/* Email + Telefon */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block mb-1">Email *</label>
                  <input
                    type="email"
                    name="email"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none"
                  />
                </div>

                <div>
                  <label className="block mb-1">Telefon</label>
                  <input
                    type="tel"
                    name="tel"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none"
                  />
                </div>
              </div>

              {/* Usługa */}
              <div>
                <label className="block mb-1">Interesująca usługa</label>
                <select
                  name="service"
                  className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none"
                >
                  <option value="">— wybierz usługę —</option>
                  <option value="budowa-domow">Budowa domów</option>
                  <option value="remonty">Remonty</option>
                  <option value="elewacja">Elewacja</option>
                  <option value="wykonczenia">Wykończenia</option>
                </select>
              </div>

              {/* Wiadomość */}
              <div>
                <label className="block mb-1">Wiadomość *</label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none resize-none"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full rounded-md bg-orange-500 py-3 text-white font-semibold hover:bg-orange-800 transition"
              >
                Wyślij zapytanie
              </button>
            </form>
          </div>
          <div>
            <div className="bg-linear-90 from-blue-900 to-blue-800 rounded-xl shadow-md text-left p-5 text-blue-200">
              <p className="text-2xl text-white font-bold">Dane kontaktowe</p>
              <p className="py-5">
                Jesteśmy do Twojej dyspozycji. Skontaktuj się z nami w dogodny
                dla Ciebie sposób.
              </p>
              <div className="flex gap-5  text-blue-200 py-3">
                <PhoneIcon className="size-13 p-3 text-white bg-orange-500 rounded-xl" />
                <div>
                  <p className="font-medium text-lg text-white">Telefon</p>
                  <a href="tel:+48123123123">+48 123 123 123</a>
                </div>
              </div>
              <div className="flex gap-5  text-blue-200 py-3">
                <EnvelopeIcon className="size-13 p-3 text-white bg-orange-500 rounded-xl" />
                <div>
                  <p className="font-medium text-lg text-white">Email</p>
                  <a href="mailto:kontakt@budowapro.pl">kontakt@budowapro.pl</a>
                </div>
              </div>
              <div className="flex gap-5  text-blue-200 py-3">
                <MapPinIcon className="size-13 p-3 text-white bg-orange-500 rounded-xl" />
                <div>
                  <p className="font-medium text-lg text-white">Adres</p>
                  <p>ul. Budowlana 15, 00-000 Warszawa</p>
                </div>
              </div>
              <div className="flex gap-5  text-blue-200 py-3">
                <PhoneIcon className="size-13 p-3 text-white bg-orange-500 rounded-xl" />
                <div>
                  <p className="font-medium text-lg text-white">
                    Godziny pracy
                  </p>
                  <p>Pn-Pt: 8:00-18:00, Sob: 9:00-14:00</p>
                </div>
              </div>
            </div>
            <div className="bg-orange-100 rounded-lg mt-5 p-5 border border-orange-200 text-left">
              <p className="text-blue-900 text-lg font-bold">
                Bezpłatna wycena
              </p>
              <p className="mt-10 text-gray-500">
                Oferujemy bezpłatną wycenę i doradztwo. Nasz specjalista
                odwiedzi Cię na miejscu i pomoże w wyborze najlepszych rozwiązań
                dla Twojego projektu.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
