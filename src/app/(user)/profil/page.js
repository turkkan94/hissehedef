"use client";
import React from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [activeTab, setActiveTab] = React.useState(0);
  const [user, setUser] = React.useState();

  const [firstName, setFirstName] = React.useState(user?.first_name);
  const [lastName, setLastName] = React.useState(user?.last_name);
  const [email, setEmail] = React.useState(user?.email);
  const [password, setPassword] = React.useState(user?.password);
  const [phone, setPhone] = React.useState(user?.phone);
  const [job, setJob] = React.useState(user?.job);
  const [instagram, setInstagram] = React.useState(user?.instagram);
  const [twitter, setTwitter] = React.useState(user?.twitter);
  const [web, setWeb] = React.useState(user?.web);
  const [access, setAccess] = React.useState(null);

  React.useEffect(() => {
    const getUser = async () => {
      if (session) {
        const res = await fetch(`${process.env.MAIN_API}/me/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session?.user.access}`,
          },
        });
        const data = await res.json();
        setUser(data);
        setFirstName(data.first_name);
        setLastName(data.last_name);
        setEmail(data.email);
        setPassword("123456");
        setPhone(data.phone);
        setJob(data.job);
        setInstagram(data.instagram);
        setTwitter(data.twitter);
        setWeb(data.web);
        setAccess(session.user.access);
      }
    };
    getUser();
  }, [session]);

  const updateProfile = async () => {
    try {
      const res = await axios.put(
        `${process.env.MAIN_API}/me/update/`,
        {
          first_name: firstName,
          last_name: lastName,
          email,
          phone,
          job,
          instagram,
          twitter,
          web,
        },
        {
          headers: {
            Authorization: `Bearer ${access}`,
          },
        }
      );
      if (res.data) {
        router.push("/profil");
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  if (status == "unauthenticated") {
    return (
      <div className="grid w-full grow grid-cols-1 place-items-center">
        <div className="w-full max-w-[26rem] p-4 sm:px-5 place-items-center">
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
                Bu bölüme erişmek için öncelikle giriş yapmanız lazım sanki?
              </p>
            </div>
            <a
              href="/giris-yap"
              className="btn mt-5 w-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
            >
              Giriş Yap
            </a>
          </div>
        </div>
      </div>
    );
  }

  if (status != "loading")
    return (
      <div className="col-span-12 px-16 pb-8">
        <div className="flex items-center space-x-4 py-5 lg:py-6">
          <h2 className="text-xl font-medium text-slate-800 dark:text-navy-50 lg:text-2xl">
            Profil
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6">
          <div className="col-span-12 lg:col-span-4">
            <div className="card p-4 sm:p-5">
              <div className="flex items-center space-x-4">
                <div className="avatar h-14 w-14">
                  <img
                    className="rounded-full"
                    src="images/200x200.png"
                    alt="avatar"
                  />
                </div>
                <div>
                  <h3 className="text-base font-medium text-slate-700 dark:text-navy-100 uppercase">
                    {user
                      ? user.first_name + " " + user?.last_name
                      : "Kullanıcı Adı"}
                  </h3>
                  <p className="text-xs+">Üye</p>
                </div>
              </div>
              <ul className="mt-6 space-y-1.5 font-inter font-medium">
                <li>
                  <a
                    className={
                      activeTab == 0
                        ? "flex cursor-pointer items-center space-x-2 rounded-lg bg-primary px-4 py-2.5 tracking-wide text-white outline-none transition-all dark:bg-accent"
                        : "group cursor-pointer flex space-x-2 rounded-lg px-4 py-2.5 tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                    }
                    onClick={() => setActiveTab(0)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Hesap</span>
                  </a>
                </li>
                <li>
                  <a
                    className={
                      activeTab == 1
                        ? "flex cursor-pointer items-center space-x-2 rounded-lg bg-primary px-4 py-2.5 tracking-wide text-white outline-none transition-all dark:bg-accent"
                        : "group cursor-pointer flex space-x-2 rounded-lg px-4 py-2.5 tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                    }
                    onClick={() => setActiveTab(1)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-slate-400 transition-colors group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      />
                    </svg>
                    <span>Sosyal</span>
                  </a>
                </li>
                <li>
                  <a
                    className={
                      activeTab == 2
                        ? "flex cursor-pointer items-center space-x-2 rounded-lg bg-primary px-4 py-2.5 tracking-wide text-white outline-none transition-all dark:bg-accent"
                        : "group cursor-pointer flex space-x-2 rounded-lg px-4 py-2.5 tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                    }
                    onClick={() => setActiveTab(2)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-slate-400 transition-colors group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    <span>Güvenlik ve Şifre</span>
                  </a>
                </li>
                <li>
                  <a
                    className="group flex space-x-2 rounded-lg px-4 py-2.5 tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-slate-400 transition-colors group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      />
                    </svg>
                    <span> İletişim </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <form
              onSubmit={updateProfile}
              className={activeTab == 0 ? "card" : "card hidden"}
            >
              <div className="flex flex-col items-center space-y-4 border-b border-slate-200 p-4 dark:border-navy-500 sm:flex-row sm:justify-between sm:space-y-0 sm:px-5">
                <h2 className="text-lg font-medium tracking-wide text-slate-700 dark:text-navy-100">
                  Hesap Ayarları
                </h2>
              </div>
              <div className="p-4 sm:p-5">
                <div className="flex flex-col">
                  <span className="text-base font-medium text-slate-600 dark:text-navy-100">
                    Avatar
                  </span>
                  <div className="avatar mt-1.5 h-20 w-20">
                    <img
                      className="mask is-squircle"
                      src="images/200x200.png"
                      alt="avatar"
                    />
                    <div className="absolute bottom-0 right-0 flex items-center justify-center rounded-full bg-white dark:bg-navy-700">
                      <button className="btn h-6 w-6 rounded-full border border-slate-200 p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:border-navy-500 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="my-7 h-px bg-slate-200 dark:bg-navy-500"></div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span>Ad </span>
                    <span className="relative mt-1.5 flex">
                      <input
                        className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                        placeholder="Adınız"
                        type="text"
                        defaultValue={user?.first_name}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                      <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                        <i className="fa-regular fa-user text-base"></i>
                      </span>
                    </span>
                  </label>
                  <label className="block">
                    <span>Soyad</span>
                    <span className="relative mt-1.5 flex">
                      <input
                        className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                        placeholder="Soyadınız"
                        type="text"
                        defaultValue={user?.last_name}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                      <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                        <i className="fa-regular fa-user text-base"></i>
                      </span>
                    </span>
                  </label>
                  <label className="block">
                    <span>Email </span>
                    <span className="relative mt-1.5 flex">
                      <input
                        className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                        placeholder="Mail adresiniz"
                        type="text"
                        defaultValue={user?.email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                        <i className="fa-regular fa-envelope text-base"></i>
                      </span>
                    </span>
                  </label>
                  <label className="block">
                    <span>Telefon Numaranız</span>
                    <span className="relative mt-1.5 flex">
                      <input
                        className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                        placeholder="Telefon numaranız"
                        type="text"
                        defaultValue={user?.phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                      <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                        <i className="fa fa-phone"></i>
                      </span>
                    </span>
                  </label>
                  <label className="block">
                    <span>Meslek </span>
                    <span className="relative mt-1.5 flex">
                      <input
                        className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                        placeholder="Mesleğiniz"
                        type="text"
                        defaultValue={user?.job}
                        onChange={(e) => setJob(e.target.value)}
                      />
                      <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                        <i className="fa-solid fa-briefcase"></i>
                      </span>
                    </span>
                  </label>
                </div>
                <div className="my-7 h-px bg-slate-200 dark:bg-navy-500"></div>
                <div>
                  <div className="flex justify-start">
                    <button
                      type="submit"
                      onClick={updateProfile}
                      className="btn cursor-pointer min-w-[7rem] rounded-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
                    >
                      Kaydet
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <form
              onSubmit={updateProfile}
              className={activeTab == 1 ? "card" : "card hidden"}
            >
              <div className="flex flex-col items-center space-y-4 border-b border-slate-200 p-4 dark:border-navy-500 sm:flex-row sm:justify-between sm:space-y-0 sm:px-5">
                <h2 className="text-lg font-medium tracking-wide text-slate-700 dark:text-navy-100">
                  Sosyal
                </h2>
              </div>
              <div className="p-4 sm:p-5">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span>Twitter </span>
                    <span className="relative mt-1.5 flex">
                      <input
                        className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                        placeholder="Twitter kullanıcı adı"
                        type="text"
                        defaultValue={user?.twitter}
                        onChange={(e) => setTwitter(e.target.value)}
                      />
                      <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                        <i className="fa-brands fa-twitter text-base"></i>
                      </span>
                    </span>
                  </label>
                  <label className="block">
                    <span>Instagram</span>
                    <span className="relative mt-1.5 flex">
                      <input
                        className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                        placeholder="Instagram kullanıcı adı"
                        type="text"
                        defaultValue={user?.instagram}
                        onChange={(e) => setInstagram(e.target.value)}
                      />
                      <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                        <i className="fa-brands fa-instagram text-base"></i>
                      </span>
                    </span>
                  </label>
                  <label className="block">
                    <span>Web </span>
                    <span className="relative mt-1.5 flex">
                      <input
                        className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                        placeholder="Web siteniz"
                        type="text"
                        defaultValue={user?.web}
                        onChange={(e) => setWeb(e.target.value)}
                      />
                      <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                        <i className="fa-solid fa-globe text-base"></i>
                      </span>
                    </span>
                  </label>
                </div>
                <div className="my-7 h-px bg-slate-200 dark:bg-navy-500"></div>
                <div>
                  <div className="flex justify-start">
                    <button
                      type="submit"
                      onClick={updateProfile}
                      className="btn cursor-pointer min-w-[7rem] rounded-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
                    >
                      Kaydet
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <div className={activeTab == 2 ? "card" : "card hidden"}>
              <div className="flex flex-col items-center space-y-4 border-b border-slate-200 p-4 dark:border-navy-500 sm:flex-row sm:justify-between sm:space-y-0 sm:px-5">
                <h2 className="text-lg font-medium tracking-wide text-slate-700 dark:text-navy-100">
                  Şifre Değiştir
                </h2>
                <div className="flex justify-center space-x-2">
                  <button
                    disabled
                    className="btn min-w-[7rem] rounded-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
                  >
                    Aktif Değil
                  </button>
                </div>
              </div>
              <div className="p-4 sm:p-5">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span>Yeni Şifre </span>
                    <span className="relative mt-1.5 flex">
                      <input
                        className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                        placeholder="Yeni şifreniz"
                        type="text"
                      />
                      <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                        <i className="fa-solid fa-key text-base"></i>
                      </span>
                    </span>
                  </label>
                  <label className="block">
                    <span>Yeni Şifre (Tekrar)</span>
                    <span className="relative mt-1.5 flex">
                      <input
                        className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                        placeholder="Yeni şifreyi tekrar giriniz"
                        type="text"
                      />
                      <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                        <i className="fa-solid fa-key text-base"></i>
                      </span>
                    </span>
                  </label>
                  <label className="block">
                    <span>Eski Şifre </span>
                    <span className="relative mt-1.5 flex">
                      <input
                        className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                        placeholder="Eski şifreniz"
                        type="text"
                      />
                      <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                        <i className="fa-solid fa-lock text-base"></i>
                      </span>
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
