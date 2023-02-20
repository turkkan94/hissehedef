"use client";
import { useState } from "react";
import { sendContactForm } from "src/lib/api";

const initValues = { name: "", email: "", subject: "", message: "" };

const initState = { isLoading: false, error: "", values: initValues };

export default function ContactPage() {
  const [state, setState] = useState(initState);

  const { values, isLoading, error } = state;

  //   const handleChange = ({ target }) =>
  //     setState((prev) => ({
  //       ...prev,
  //       values: {
  //         ...prev.values,
  //         [target.name]: target.value,
  //       },
  //     }));

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setState(initState);
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };

  return (
    <div className="flex flex-col items-center px-[var(--margin-x)]">
      <div className="flex items-center space-x-4 py-5 lg:py-6">
        <h2 className="text-xl font-medium text-slate-800 dark:text-navy-50 lg:text-2xl">
          İletişim
        </h2>
      </div>
      <div className="col-span-12 sm:col-span-8 max-w-xl">
        <div className="card p-4 sm:p-5">
          <p className="text-base font-medium text-slate-700 dark:text-navy-100">
            Öneri ve şikayetlerinizi dile getirebilirsiniz.
          </p>
          <div className="mt-4 space-y-4">
            <label className="block">
              <span>Ad, Soyad</span>
              <span className="relative mt-1.5 flex">
                <input
                  className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                  placeholder="Adınız ve soyadınızı giriniz."
                  type="text"
                  name="name"
                  //   value={values.name}
                  //   onChange={handleChange}
                />
                <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                  <i className="fa-regular fa-building text-base"></i>
                </span>
              </span>
            </label>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="block">
                <span>Email</span>
                <span className="relative mt-1.5 flex">
                  <input
                    className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                    placeholder="Email adresinizi giriniz."
                    type="text"
                    name="email"
                    // value={values.email}
                    // onChange={handleChange}
                  />
                  <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                    <i className="fa-regular fa-envelope text-base"></i>
                  </span>
                </span>
              </label>
              <label className="block">
                <span>Konu</span>
                <span className="relative mt-1.5 flex">
                  <input
                    className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                    placeholder="Mailin genel konusu."
                    type="text"
                    name="subject"
                    // value={values.subject}
                    // onChange={handleChange}
                  />
                  <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                    <i className="fa-solid fa-comment"></i>{" "}
                  </span>
                </span>
              </label>
            </div>
            <label className="block">
              <span>Mesajınız</span>
              <textarea
                rows="4"
                placeholder="Konunun detaylarını yazabilirsiniz."
                className="form-textarea mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent p-2.5 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                name="message"
                // value={values.message}
                // onChange={handleChange}
              ></textarea>
            </label>

            <div className="flex justify-center space-x-2">
              <button
                disabled={
                  !values.name ||
                  !values.email ||
                  !values.subject ||
                  !values.message
                }
                onClick={onSubmit}
                className="btn space-x-2 bg-primary w-[100px] font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
              >
                {!isLoading ? (
                  <span>Gönder</span>
                ) : (
                  <div class="spinner h-4 w-4 animate-spin rounded-full border-[3px] border-slate-150 border-r-slate-500 dark:border-navy-500 dark:border-r-navy-300"></div>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
