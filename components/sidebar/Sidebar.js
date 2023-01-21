import React from "react";
import Link from "next/link";
function Sidebar() {
  return (
    <>
      <div className="app-menu navbar-menu">
        <div className="navbar-brand-box">
          <a href="index.html" className="logo logo-dark">
            <span className="logo-sm">
              <img src="/assets/images/logo-sm.png" alt="" height="22" />
            </span>
            <span className="logo-lg">
              <img src="/assets/images/logo-dark.png" alt="" height="17" />
            </span>
          </a>
          <a href="index.html" className="logo logo-light">
            <span className="logo-sm">
              <img src="/assets/images/logo-sm.png" alt="" height="22" />
            </span>
            <span className="logo-lg">
              <img src="/assets/images/logo-light.png" alt="" height="17" />
            </span>
          </a>
          <button
            type="button"
            className="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover"
            id="vertical-hover"
          >
            <i className="ri-record-circle-line"></i>
          </button>
        </div>
        <div id="scrollbar">
          <div className="container-fluid dropdown-custom-right">
            <div id="two-column-menu"></div>
            <ul className="navbar-nav" id="navbar-nav">
              <li className="menu-title">
                <span data-key="t-menu">Menü</span>
              </li>
              <li className="nav-item">
                <a className="nav-link menu-link" href="/" role="button">
                  <i class="mdi mdi-home"></i>{" "}
                  <span data-key="t-dashboards">Anasayfa</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link menu-link"
                  href="/hisseler"
                  role="button"
                >
                  <i class="mdi mdi-chart-areaspline"></i>{" "}
                  <span data-key="t-dashboards">Hisseler</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link menu-link" href="#" role="button">
                  <i className="mdi mdi-book-open-page-variant"></i>{" "}
                  <span data-key="t-dashboards">Blog</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link menu-link" href="#" role="button">
                  <i className="mdi mdi-email"></i>{" "}
                  <span data-key="t-dashboards">İletişim</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="sidebar-background"></div>
      </div>
    </>
  );
}

export default Sidebar;
