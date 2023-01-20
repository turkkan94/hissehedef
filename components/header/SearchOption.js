"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import SimpleBar from "simplebar-react";

function SearchOption() {
  const [value, setValue] = useState("");
  const onChangeData = (value) => {
    setValue(value);
  };
  const [filteredStocks, setFilteredStocks] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    var searchOptions = document.getElementById("search-close-options");
    var dropdown = document.getElementById("search-dropdown");
    var searchInput = document.getElementById("search-options");

    searchInput.addEventListener("focus", function () {
      var inputLength = searchInput.value.length;
      if (inputLength > 0) {
        dropdown.classList.add("show");
        searchOptions.classList.remove("d-none");
      } else {
        dropdown.classList.remove("show");
        searchOptions.classList.add("d-none");
      }
    });

    searchInput.addEventListener("keyup", function () {
      var inputLength = searchInput.value.length;
      if (inputLength > 0) {
        dropdown.classList.add("show");
        searchOptions.classList.remove("d-none");
      } else {
        dropdown.classList.remove("show");
        searchOptions.classList.add("d-none");
      }
    });

    searchOptions.addEventListener("click", function () {
      searchInput.value = "";
      dropdown.classList.remove("show");
      searchOptions.classList.add("d-none");
    });

    document.body.addEventListener("click", function (e) {
      if (e.target.getAttribute("id") !== "search-options") {
        dropdown.classList.remove("show");
        searchOptions.classList.add("d-none");
      }
    });
  }, []);

  useEffect(() => {
    if (value !== "") {
      setLoading(true);
      fetch(`${process.env.MAIN_API}/stocks/?symbol=${value}`)
        .then((res) => res.json())
        .then((data) => {
          setFilteredStocks(data);
          setLoading(false);
        });
    }
  }, [value]);

  return (
    <>
      {" "}
      <form className="app-search d-none d-md-block">
        <div className="position-relative">
          <input
            type="text"
            className="form-control"
            placeholder="Hisse Ara..."
            id="search-options"
            value={value}
            onChange={(e) => {
              onChangeData(e.target.value);
            }}
          />
          <span className="mdi mdi-magnify search-widget-icon"></span>
          <span
            className="mdi mdi-close-circle search-widget-icon search-widget-icon-close d-none"
            id="search-close-options"
          ></span>
        </div>
        <div className="dropdown-menu dropdown-menu-lg" id="search-dropdown">
          <SimpleBar style={{ height: "320px" }}>
            <div className="dropdown-header mt-2">
              <h6 className="text-overflow text-muted mb-2 text-uppercase">
                Hisseler
              </h6>
            </div>

            <div className="notification-list">
              {filteredStocks !== null &&
                filteredStocks.map((stock) => (
                  <a
                    key={stock.id}
                    href={`/hisseler/${stock.symbol}`}
                    className="dropdown-item notify-item py-2"
                  >
                    <div className="d-flex">
                      <img
                        src={`/assets/stocks/logo/${stock.symbol}.svg`}
                        className="me-3 rounded-circle avatar-xs"
                        alt="user-pic"
                      />
                      <div className="flex-1">
                        <h6
                          className="m-0 text-truncate"
                          style={{ width: 250 }}
                        >
                          {stock.title}
                        </h6>
                        <span className="fs-11 mb-0 text-muted text-uppercase">
                          {stock.symbol}
                        </span>
                      </div>
                    </div>
                  </a>
                ))}
            </div>
          </SimpleBar>

          <div className="text-center pt-3 pb-1">
            <Link href="/hisseler" className="btn btn-primary btn-sm">
              Tüm Hisseler <i className="ri-arrow-right-line ms-1"></i>
            </Link>
          </div>
        </div>
      </form>
    </>
  );
}

export default SearchOption;
