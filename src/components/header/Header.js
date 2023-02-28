"use client";
import React, { Fragment } from "react";
import useDarkMode from "../helpers/useDarkMode";
import { Dialog, Transition } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { useSession, signIn } from "next-auth/react";
import Image from "next/image";
import logo from "../../../public/images/web/logo.png";
import Tippy from "@tippyjs/react";

export default function Header({
  isMobileMenu,
  setIsMobileMenu,
  useSharedMobileSearch,
  useSharedSidebar,
}) {
  const { data: session, status } = useSession();
  const [colorTheme, setTheme] = useDarkMode();
  const { setIsMobileSearch } = useSharedMobileSearch();
  const { setIsSidebar } = useSharedSidebar();
  let [isOpen, setIsOpen] = React.useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  React.useEffect(() => {
    var dropdown = document.getElementById("searchbar-box");
    var searchInput = document.getElementById("searchbar-ref");

    searchInput.addEventListener("focus", function () {
      var inputLength = searchInput.value.length;
      if (inputLength > 0) {
        dropdown.classList.add("show");
      } else {
        dropdown.classList.remove("show");
      }
    });

    searchInput.addEventListener("keyup", function () {
      var inputLength = searchInput.value.length;
      if (inputLength > 0) {
        dropdown.classList.add("show");
      } else {
        dropdown.classList.remove("show");
      }
    });

    document.body.addEventListener("click", function (e) {
      if (e.target.getAttribute("id") !== "search-options") {
        dropdown.classList.remove("show");
      }
    });
  }, []);

  const [value, setValue] = React.useState("");
  const onChangeData = (value) => {
    setValue(value);
  };
  const [filteredStocks, setFilteredStocks] = React.useState(null);
  React.useEffect(() => {
    if (value !== "") {
      fetch(`${process.env.MAIN_API}/stocks/?symbol=${value}`)
        .then((res) => res.json())
        .then((data) => {
          setFilteredStocks(data.stocks);
        });
    }
  }, [value]);

  const router = useRouter();
  const submitHandler = async (e) => {
    e.preventDefault();
    signIn("credentials", { username: email, password, redirect: false }).then(
      ({ ok, error }) => {
        if (ok) {
          router.push("/");
          setIsOpen(false);
        } else {
          console.log(error);
        }
      }
    );
  };
  return (
    <nav className="header print:hidden">
      {/* <!-- App Header  --> */}
      <div className="header-container relative flex w-full bg-white dark:bg-navy-700 print:hidden">
        {/* <!-- Header Items --> */}
        <div className="flex w-full items-center justify-between">
          {/* <!-- Left: Sidebar Toggle Button --> */}
          <div className="h-7 w-7">
            {isMobileMenu ? (
              <button
                onClick={() => setIsMobileMenu(false)}
                className="sidebar-toggle ml-0.5 md:hidden flex h-7 w-7 flex-col justify-center space-y-1.5 text-primary outline-none focus:outline-none dark:text-accent-light/80"
              >
                <i className="fa-solid fa-xmark text-xl"></i>
              </button>
            ) : (
              <button
                onClick={() => setIsMobileMenu(true)}
                className="sidebar-toggle ml-0.5 md:hidden flex h-7 w-7 flex-col justify-center space-y-1.5 text-primary outline-none focus:outline-none dark:text-accent-light/80"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            )}

            <div id="searchbar-wrapper" className="hidden md:flex">
              <div className="relative mr-4 flex h-8">
                <input
                  id="searchbar-ref"
                  placeholder="Hissse Ara..."
                  className="form-input peer h-full w-60 rounded-full bg-slate-150 px-4 pl-9 text-xs+ text-slate-800 ring-primary/50 hover:bg-slate-200 focus:ring dark:bg-navy-900/90 dark:text-navy-100 dark:placeholder-navy-300 dark:ring-accent/50 dark:hover:bg-navy-900 dark:focus:bg-navy-900"
                  type="text"
                  value={value}
                  onChange={(e) => {
                    onChangeData(e.target.value);
                  }}
                />
                <div className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4.5 w-4.5 transition-colors duration-200"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3.316 13.781l.73-.171-.73.171zm0-5.457l.73.171-.73-.171zm15.473 0l.73-.171-.73.171zm0 5.457l.73.171-.73-.171zm-5.008 5.008l-.171-.73.171.73zm-5.457 0l-.171.73.171-.73zm0-15.473l-.171-.73.171.73zm5.457 0l.171-.73-.171.73zM20.47 21.53a.75.75 0 101.06-1.06l-1.06 1.06zM4.046 13.61a11.198 11.198 0 010-5.115l-1.46-.342a12.698 12.698 0 000 5.8l1.46-.343zm14.013-5.115a11.196 11.196 0 010 5.115l1.46.342a12.698 12.698 0 000-5.8l-1.46.343zm-4.45 9.564a11.196 11.196 0 01-5.114 0l-.342 1.46c1.907.448 3.892.448 5.8 0l-.343-1.46zM8.496 4.046a11.198 11.198 0 015.115 0l.342-1.46a12.698 12.698 0 00-5.8 0l.343 1.46zm0 14.013a5.97 5.97 0 01-4.45-4.45l-1.46.343a7.47 7.47 0 005.568 5.568l.342-1.46zm5.457 1.46a7.47 7.47 0 005.568-5.567l-1.46-.342a5.97 5.97 0 01-4.45 4.45l.342 1.46zM13.61 4.046a5.97 5.97 0 014.45 4.45l1.46-.343a7.47 7.47 0 00-5.568-5.567l-.342 1.46zm-5.457-1.46a7.47 7.47 0 00-5.567 5.567l1.46.342a5.97 5.97 0 014.45-4.45l-.343-1.46zm8.652 15.28l3.665 3.664 1.06-1.06-3.665-3.665-1.06 1.06z" />
                  </svg>
                </div>
              </div>
              <div
                id="searchbar-box"
                data-active-tab="#search-all"
                className="popper-root search-tab-wrapper"
              >
                <div className="popper-box flex max-h-[calc(100vh-6rem)] w-80 flex-col rounded-lg border border-slate-150 bg-white shadow-soft dark:border-navy-800 dark:bg-navy-700 dark:shadow-soft-dark">
                  <div className="is-scrollbar-hidden overflow-y-auto overscroll-contain pb-2">
                    <div className="flex items-center justify-between bg-slate-100 py-1.5 px-3 dark:bg-navy-800">
                      <p className="text-xs uppercase">Hissseler</p>
                      <a
                        href="/hisseler"
                        className="text-tiny+ font-medium uppercase text-primary outline-none transition-colors duration-300 hover:text-primary/70 focus:text-primary/70 dark:text-accent-light dark:hover:text-accent-light/70 dark:focus:text-accent-light/70"
                      >
                        Tümü
                      </a>
                    </div>
                    <div className="mt-1 font-inter font-medium">
                      {filteredStocks !== null &&
                        filteredStocks.map((stock) => (
                          <a
                            className="group flex items-center space-x-2 px-2.5 py-2 tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                            key={stock.id}
                            href={`/hisseler/${stock.symbol}`}
                          >
                            <Image
                              className="rounded-full"
                              width={30}
                              height={30}
                              src={`/images/stocks/logo/${stock.symbol}.svg`}
                              alt={stock.symbol}
                            />
                            <span>{stock.title}</span>
                          </a>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Right: Header buttons --> */}
          <div className="-mr-1.5 flex items-center space-x-2">
            {/* <!-- Mobile Search Toggle --> */}
            <button
              onClick={() => setIsMobileSearch(true)}
              className="mobile-searchbar-show btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 sm:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5.5 w-5.5 text-slate-500 dark:text-navy-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            {/* <!-- Dark Mode Toggle --> */}
            {colorTheme === "light" ? (
              <Tippy content="Gece Modu" placement="bottom">
                <button
                  className="darkmode-toggle btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                  onClick={() => setTheme("light")}
                >
                  <svg
                    className="darkmode-moon h-6 w-6 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.75 3.412a.818.818 0 01-.07.917 6.332 6.332 0 00-1.4 3.971c0 3.564 2.98 6.494 6.706 6.494a6.86 6.86 0 002.856-.617.818.818 0 011.1 1.047C19.593 18.614 16.218 21 12.283 21 7.18 21 3 16.973 3 11.956c0-4.563 3.46-8.31 7.925-8.948a.818.818 0 01.826.404z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="darkmode-sun h-6 w-6 text-amber-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </Tippy>
            ) : (
              <Tippy content="Gündüz Modu" placement="bottom">
                <button
                  className="darkmode-toggle btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                  onClick={() => setTheme("dark")}
                >
                  <svg
                    className="darkmode-moon h-6 w-6 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.75 3.412a.818.818 0 01-.07.917 6.332 6.332 0 00-1.4 3.971c0 3.564 2.98 6.494 6.706 6.494a6.86 6.86 0 002.856-.617.818.818 0 011.1 1.047C19.593 18.614 16.218 21 12.283 21 7.18 21 3 16.973 3 11.956c0-4.563 3.46-8.31 7.925-8.948a.818.818 0 01.826.404z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="darkmode-sun h-6 w-6 text-amber-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </Tippy>
            )}
            {/* <!-- Monochrome Mode Toggle --> */}
            {status == "loading" ? (
              ""
            ) : session == null ? (
              <button
                onClick={openModal}
                className="btn space-x-2 bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
              >
                <span>Giriş</span>
                <i className="fa-solid fa-user"></i>
              </button>
            ) : (
              <div className="flex flex-row items-center">
                <Tippy content="Profilim" placement="bottom">
                  <button className="monochrome-toggle btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                    <a href="/profil">
                      <i className="fa-solid fa-user bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-lg font-semibold text-transparent"></i>
                    </a>
                  </button>
                </Tippy>
                <Tippy content="Takip Listem" placement="bottom">
                  <button
                    data-toggle="drawer"
                    data-target="#right-sidebar"
                    className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                    onClick={() => setIsSidebar(true)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5.5 w-5.5 text-slate-500 dark:text-navy-100"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                      />
                    </svg>
                  </button>
                </Tippy>
              </div>
            )}
            <Transition appear show={isOpen} as={Fragment}>
              <Dialog
                as="div"
                className="relative z-[999]"
                onClose={closeModal}
              >
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Dialog.Panel className="card dark:border dark:border-[#364056] w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                        <div className="grid w-full grow grid-cols-1 place-items-center">
                          <div className="w-full max-w-[26rem] p-4 sm:px-5">
                            <div className="text-center">
                              <Image
                                className="mx-auto h-16 w-16"
                                src={logo}
                                alt="Hisse Hedef"
                                width={44}
                                height={44}
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
                              className="mt-5 rounded-lg p-5 lg:p-7"
                            >
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
                                    onChange={(e) =>
                                      setPassword(e.target.value)
                                    }
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
                                  <span className="line-clamp-1">
                                    Beni hatırla
                                  </span>
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
                                    href="/kayit-ol"
                                  >
                                    Kayıt Ol
                                  </a>
                                </p>
                              </div>
                            </form>
                            <div className="mt-8 flex justify-center text-xs text-slate-400 dark:text-navy-300">
                              <a href="#">Gizlilik Politikası</a>
                              <div className="mx-3 my-1 w-px bg-slate-200 dark:bg-navy-500"></div>
                              <a href="#">Hizmet Şartları</a>
                            </div>
                          </div>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>
          </div>
        </div>
      </div>
    </nav>
  );
}
