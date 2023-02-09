import React from "react";

export default function NotFound() {
  return (
    <div className="grid grid-cols-1 place-items-center gap-12 p-6 lg:grid-cols-2 lg:gap-24">
      <div className="absolute p-6 opacity-20 lg:static lg:opacity-100">
        <img
          width="440"
          id="hero-image-light"
          src="/images/illustrations/penguins.svg"
          alt="404 image"
        />
      </div>
      <div className="z-2 text-center lg:text-left">
        <p className="mt-4 text-7xl font-bold text-primary dark:text-accent lg:mt-0">
          404
        </p>
        <p className="mt-6 text-xl font-semibold text-slate-800 dark:text-navy-50 lg:mt-10 lg:text-3xl">
          Oops. Sayfa bulunamadı.
        </p>
        <p className="pt-2 text-slate-500 dark:text-navy-200 lg:text-lg">
          Nasıl yerlerde dolaşıyorsun öyle :D
        </p>

        <button className="btn mt-10 h-11 bg-primary text-base font-medium text-white hover:bg-primary-focus hover:shadow-lg hover:shadow-primary/50 focus:bg-primary-focus focus:shadow-lg focus:shadow-primary/50 active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:hover:shadow-accent/50 dark:focus:bg-accent-focus dark:focus:shadow-accent/50 dark:active:bg-accent/90">
          <a href="/">Anasayfaya Dön</a>
        </button>
      </div>
    </div>
  );
}
