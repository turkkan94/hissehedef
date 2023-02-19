"use client";
import React from "react";
import Image from "next/image";

export default function FavoritesTable({ favorites, user }) {
  const [filteredStocks, setFilteredStocks] = React.useState(null);
  const [value, setValue] = React.useState("");
  const onChangeData = (value) => {
    setValue(value);
  };

  React.useEffect(() => {
    setFilteredStocks(favorites);
  }, [favorites]);

  React.useEffect(() => {
    if (value !== "") {
      fetch(
        `${process.env.MAIN_API}/filtered-stocks/?ids=${user?.favorites.split(
          ","
        )}&symbol=${value}`
      )
        .then((res) => res.json())
        .then((data) => {
          setFilteredStocks(data);
        });
    } else {
      user &&
        fetch(
          `${process.env.MAIN_API}/filtered-stocks/?ids=${user?.favorites.split(
            ","
          )}`
        )
          .then((res) => res.json())
          .then((data) => {
            setFilteredStocks(data);
          });
    }
  }, [value]);
  return (
    <>
      <label className="relative flex px-3">
        <input
          className="form-input peer h-8 w-full rounded-lg bg-slate-150 px-3 py-2 pl-9 text-xs+ ring-primary/50 placeholder:text-slate-400 hover:bg-slate-200 focus:ring dark:bg-navy-900/90 dark:ring-accent/50 dark:placeholder:text-navy-300 dark:hover:bg-navy-900 dark:focus:bg-navy-900"
          placeholder="Hisse Ara..."
          type="text"
          value={value}
          onChange={(e) => {
            onChangeData(e.target.value);
          }}
        />
        <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4.5 w-4.5 transition-colors duration-200"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M3.316 13.781l.73-.171-.73.171zm0-5.457l.73.171-.73-.171zm15.473 0l.73-.171-.73.171zm0 5.457l.73.171-.73-.171zm-5.008 5.008l-.171-.73.171.73zm-5.457 0l-.171.73.171-.73zm0-15.473l-.171-.73.171.73zm5.457 0l.171-.73-.171.73zM20.47 21.53a.75.75 0 101.06-1.06l-1.06 1.06zM4.046 13.61a11.198 11.198 0 010-5.115l-1.46-.342a12.698 12.698 0 000 5.8l1.46-.343zm14.013-5.115a11.196 11.196 0 010 5.115l1.46.342a12.698 12.698 0 000-5.8l-1.46.343zm-4.45 9.564a11.196 11.196 0 01-5.114 0l-.342 1.46c1.907.448 3.892.448 5.8 0l-.343-1.46zM8.496 4.046a11.198 11.198 0 015.115 0l.342-1.46a12.698 12.698 0 00-5.8 0l.343 1.46zm0 14.013a5.97 5.97 0 01-4.45-4.45l-1.46.343a7.47 7.47 0 005.568 5.568l.342-1.46zm5.457 1.46a7.47 7.47 0 005.568-5.567l-1.46-.342a5.97 5.97 0 01-4.45 4.45l.342 1.46zM13.61 4.046a5.97 5.97 0 014.45 4.45l1.46-.343a7.47 7.47 0 00-5.568-5.567l-.342 1.46zm-5.457-1.46a7.47 7.47 0 00-5.567 5.567l1.46.342a5.97 5.97 0 014.45-4.45l-.343-1.46zm8.652 15.28l3.665 3.664 1.06-1.06-3.665-3.665-1.06 1.06z" />
          </svg>
        </span>
      </label>
      <div className="mt-3">
        <h2 className="px-3 text-xs+ font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100">
          Takip Listem
        </h2>
        <div className="mt-3 space-y-3">
          <div className="is-scrollbar-hidden min-w-full overflow-x-auto">
            {filteredStocks?.length > 0 ? (
              <table className="is-hoverable w-full text-left">
                <tbody>
                  {filteredStocks.map((favorite, i) => (
                    <tr
                      key={i}
                      className="border border-transparent border-b-slate-200 dark:border-b-navy-500"
                    >
                      <td className="whitespace-nowrap px-2 py-3 sm:px-3">
                        <a href={`/hisseler/${favorite.symbol}`}>
                          <Image
                            src={`/images/stocks/logo/${favorite.symbol}.svg`}
                            width={50}
                            height={50}
                            alt={favorite.symbol}
                            className="rounded-full shadow-md w-[50px]"
                          />
                        </a>
                      </td>
                      <td className="whitespace-nowrap px-2 py-3 sm:px-3">
                        <a href={`/hisseler/${favorite.symbol}`}>
                          <div className="flex flex-col">
                            <span className="font-semibold">
                              {favorite.title}
                            </span>
                            <span className="uppercase text-xs">
                              {favorite.symbol}
                            </span>
                          </div>
                        </a>
                      </td>
                      <td className="pr-4">
                        {/* <button>
                          <i className="fa-solid fa-circle-xmark text-xl"></i>
                        </button> */}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="mx-4">
                Hisse bulunumadı ya da favorileriniz boş.
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
