"use client";
import { useState } from "react";
import { sendContactForm } from "src/lib/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const initState = { isLoading: false, error: "" };

export default function ContactForm() {
  const [state, setState] = useState(initState);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const { isLoading, error } = state;

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      const values = { name, email, subject, message };
      await sendContactForm(values);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      toast("Tebrikler ! Mesajınız gönderildi.", {
        position: "top-right",
        hideProgressBar: true,
        className: "text-slate-800",
      });
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };
  return (
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
              value={name}
              onChange={(e) => setName(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
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
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </label>

        <div className="flex justify-center space-x-2">
          <button
            disabled={!name || !email || !subject || !message}
            onClick={onSubmit}
            className="btn space-x-2 bg-primary w-[100px] font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
          >
            {!isLoading ? (
              <span>Gönder</span>
            ) : (
              <div className="spinner h-4 w-4 animate-spin rounded-full border-[3px] border-slate-150 border-r-slate-500 dark:border-navy-500 dark:border-r-navy-300"></div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
