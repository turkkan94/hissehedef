"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import FullScreenDropdown from "./FullScreenDropdown";
import ProfileDropdown from "./ProfileDropdown";
import SearchOption from "./SearchOption";
import { Dropdown, DropdownMenu, DropdownToggle, Form } from "reactstrap";
import SimpleBar from "simplebar-react";

function Header({ headerClass }) {
  const { data: session, status } = useSession();
  const [search, setSearch] = useState(false);
  const [user, setUser] = useState();

  const [value, setValue] = useState("");
  const onChangeData = (value) => {
    setValue(value);
  };
  const [isLoading, setLoading] = useState(false);

  const [filteredStocks, setFilteredStocks] = useState(null);

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

  useEffect(() => {
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
      }
    };
    getUser();
  }, [session]);
  const toogleSearch = () => {
    setSearch(!search);
  };

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
  const toogleMenuBtn = () => {
    var windowSize = document.documentElement.clientWidth;

    if (windowSize > 767)
      document.querySelector(".hamburger-icon").classList.toggle("open");

    //For collapse horizontal menu
    if (document.documentElement.getAttribute("data-layout") === "horizontal") {
      document.body.classList.contains("menu")
        ? document.body.classList.remove("menu")
        : document.body.classList.add("menu");
    }

    //For collapse vertical menu
    if (document.documentElement.getAttribute("data-layout") === "vertical") {
      if (windowSize < 1025 && windowSize > 767) {
        document.body.classList.remove("vertical-sidebar-enable");
        document.documentElement.getAttribute("data-sidebar-size") === "sm"
          ? document.documentElement.setAttribute("data-sidebar-size", "")
          : document.documentElement.setAttribute("data-sidebar-size", "sm");
      } else if (windowSize > 1025) {
        document.body.classList.remove("vertical-sidebar-enable");
        document.documentElement.getAttribute("data-sidebar-size") === "lg"
          ? document.documentElement.setAttribute("data-sidebar-size", "sm")
          : document.documentElement.setAttribute("data-sidebar-size", "lg");
      } else if (windowSize <= 767) {
        document.body.classList.add("vertical-sidebar-enable");
        document.documentElement.setAttribute("data-sidebar-size", "lg");
      }
    }

    //Two column menu
    if (document.documentElement.getAttribute("data-layout") === "twocolumn") {
      document.body.classList.contains("twocolumn-panel")
        ? document.body.classList.remove("twocolumn-panel")
        : document.body.classList.add("twocolumn-panel");
    }
  };

  return (
    <>
      <header id="page-topbar" className={headerClass}>
        <div className="layout-width">
          <div className="navbar-header">
            <div className="d-flex">
              <div className="navbar-brand-box horizontal-logo">
                <Link href="/" className="logo logo-dark">
                  <span className="logo-sm">
                    <img
                      src={"/assets/images/logo-sm.png"}
                      alt=""
                      height="22"
                    />
                  </span>
                  <span className="logo-lg">
                    <img
                      src={"/assets/images/logo-dark.png"}
                      alt=""
                      height="17"
                    />
                  </span>
                </Link>

                <Link href="/" className="logo logo-light">
                  <span className="logo-sm">
                    <img
                      src={"/assets/images/logo-sm.png"}
                      alt=""
                      height="22"
                    />
                  </span>
                  <span className="logo-lg">
                    <img
                      src={"/assets/images/logo-light.png"}
                      alt=""
                      height="32"
                    />
                  </span>
                </Link>
              </div>

              <button
                onClick={toogleMenuBtn}
                type="button"
                className="btn btn-sm px-3 fs-16 header-item vertical-menu-btn topnav-hamburger"
                id="topnav-hamburger-icon"
              >
                <span className="hamburger-icon">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </button>

              <SearchOption />
            </div>

            <div className="d-flex align-items-center">
              {/* WebAppsDropdown */}
              {/* <WebAppsDropdown /> */}
              <FullScreenDropdown />
              {/* Dark/Light Mode set */}
              {/* <LightDark
                layoutMode={layoutModeType}
                onChangeLayoutMode={onChangeLayoutMode}
              /> */}
              {/* NotificationDropdown */}
              {/* <NotificationDropdown /> */}
              {session?.user ? (
                <ProfileDropdown user={user} />
              ) : (
                <div className="ms-1 header-item d-none d-sm-flex">
                  <button
                    onClick={() => signIn()}
                    type="button"
                    className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle"
                  >
                    <i className="mdi mdi-account fs-22"></i>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
