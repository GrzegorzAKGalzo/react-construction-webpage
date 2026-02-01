import React from "react";
import SubpageHeader from "../components/SubpageHeader";
import { ClockIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

export default function Contact() {
  return (
    <main>
      <SubpageHeader>
        <h1 className="text-5xl text-white text-center font-bold">Kontakt</h1>
      </SubpageHeader>
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
          <div
            data-aos="fade-up"
            className="w-full max-w-2xl rounded-xl border border-gray-100 shadow-md p-6 md:p-8"
          >
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
            <div
              data-aos="fade-up"
              className="bg-linear-90 from-blue-900 to-blue-800 rounded-xl shadow-md text-left p-5 text-blue-200"
            >
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
                <ClockIcon className="size-13 p-3 text-white bg-orange-500 rounded-xl" />
                <div>
                  <p className="font-medium text-lg text-white">
                    Godziny pracy
                  </p>
                  <p>Pn-Pt: 8:00-18:00, Sob: 9:00-14:00</p>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="bg-orange-100 rounded-lg mt-5 p-5 border border-orange-200 text-left"
            >
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
