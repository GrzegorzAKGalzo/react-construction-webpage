import React from "react";
import notfound from "/images/notfoundimg.png";

export default function NotFound() {
  return (
    <main>
      <section className="h-screen flex text-center flex-col justify-center">
        <img
          src={notfound}
          alt="Strona nie znaleziona"
          className="h-full object-contain"
        />
        <h2>Ups... Nic tu nie ma</h2>
        <a href="/" className="btn-primary mx-auto">
          Strona główna
        </a>
      </section>
    </main>
  );
}
