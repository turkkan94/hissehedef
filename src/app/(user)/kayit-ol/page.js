"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const { data: session, status } = useSession();
  const router = useRouter();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios
        .post(`${process.env.MAIN_API}/register/`, {
          first_name: firstName,
          last_name: lastName,
          email,
          password,
          favorites: "",
          job: "",
          phone: "",
          twitter: "",
          instagram: "",
          web: "",
        })
        .then((res) => {
          if (res.status === 200) {
            router.push("/giris-yap");
          }
        });
      if (res.data.username) {
        router.push("/giris-yap");
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (status == "authenticated") {
    return (
      <main className="grid w-full grow grid-cols-1 place-items-center">
        <div className="w-full max-w-[26rem] p-4 sm:px-5">
          <div className="text-center">
            <img
              className="mx-auto h-16 w-16"
              src="images/web/logo.png"
              alt="logo"
            />
            <div className="mt-4">
              <h2 className="text-2xl font-semibold text-slate-600 dark:text-navy-100">
                Uyarı!
              </h2>
              <p className="text-slate-400 dark:text-navy-300">
                Zaten giriş yapmış durumdasınız! Farklı bir hesapla giriş yapmak
                için öncelikle
                <a
                  className="cursor-pointer text-primary"
                  onClick={() => signOut()}
                >
                  {" "}
                  çıkış yap.
                </a>
              </p>
            </div>
            <a
              href="/"
              className="btn mt-5 w-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
            >
              Anasayfaya Git
            </a>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="grid w-full grow grid-cols-1 place-items-center">
      <div className="w-full max-w-[26rem] p-4 sm:px-5">
        <div className="text-center">
          <img
            className="mx-auto h-16 w-16"
            src="images/web/logo.png"
            alt="logo"
          />
          <div className="mt-4">
            <h2 className="text-2xl font-semibold text-slate-600 dark:text-navy-100">
              Hoşgeldiniz!
            </h2>
            <p className="text-slate-400 dark:text-navy-300">
              Devam etmek için lütfen giriş yapınız...
            </p>
          </div>
        </div>
        <form
          onSubmit={submitHandler}
          className="card mt-5 rounded-lg p-5 lg:p-7"
        >
          <label className="block">
            <span>Ad:</span>
            <span className="relative mt-1.5 flex">
              <input
                className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                placeholder="Adınızı giriniz."
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
              />
              <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                <i className="fa-regular fa-user"></i>
              </span>
            </span>
          </label>
          <label className="block">
            <span>Soyad:</span>
            <span className="relative mt-1.5 flex">
              <input
                className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                placeholder="Soyadınız giriniz."
                type="text"
                onChange={(e) => setLastName(e.target.value)}
              />
              <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                <i className="fa-solid fa-signature"></i>
              </span>
            </span>
          </label>
          <label className="block">
            <span>Mail:</span>
            <span className="relative mt-1.5 flex">
              <input
                className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                placeholder="Mail adresinizi giriniz."
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 transition-colors duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>
            </span>
          </label>
          <label className="mt-4 block">
            <span>Şifre:</span>
            <span className="relative mt-1.5 flex">
              <input
                className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                placeholder="Enter Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 transition-colors duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </span>
            </span>
          </label>
          <div className="mt-4 flex items-center justify-between space-x-2">
            <label className="inline-flex items-center space-x-2">
              <input
                className="form-checkbox is-basic h-5 w-5 rounded border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
                type="checkbox"
              />
              <span className="line-clamp-1">Beni hatırla</span>
            </label>
            <a
              href="#"
              className="text-xs text-slate-400 transition-colors line-clamp-1 hover:text-slate-800 focus:text-slate-800 dark:text-navy-300 dark:hover:text-navy-100 dark:focus:text-navy-100"
            >
              Şifremi Unuttum?
            </a>
          </div>
          <button
            type="submit"
            className="btn mt-5 w-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
          >
            Giriş Yap
          </button>
          <div className="mt-4 text-center text-xs+">
            <p className="line-clamp-1">
              <span>Hala üye değil misiniz? </span>

              <a
                className="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
                href="pages-singup-1.html"
              >
                Kayıt Ol
              </a>
            </p>
          </div>
          {/* <div className="my-7 flex items-center space-x-3">
            <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
            <p>OR</p>
            <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
          </div>
          <div className="flex space-x-4">
            <button className="btn w-full space-x-3 border border-slate-300 font-medium text-slate-800 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-50 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90">
              <img
                className="h-5.5 w-5.5"
                src="images/100x100.png"
                alt="logo"
              />
              <span>Google</span>
            </button>
            <button className="btn w-full space-x-3 border border-slate-300 font-medium text-slate-800 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-50 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90">
              <img
                className="h-5.5 w-5.5"
                src="images/100x100.png"
                alt="logo"
              />
              <span>Github</span>
            </button>
          </div> */}
        </form>
        <div className="mt-8 flex justify-center text-xs text-slate-400 dark:text-navy-300">
          <a href="#">Gizlilik Politikası</a>
          <div className="mx-3 my-1 w-px bg-slate-200 dark:bg-navy-500"></div>
          <a href="#">Hizmet Şartları</a>
        </div>
      </div>
    </main>
  );
}
