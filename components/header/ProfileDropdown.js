import { signOut } from "next-auth/react";
import React, { useState, useEffect } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

function ProfileDropdown({ user }) {
  //Dropdown Toggle
  const [isProfileDropdown, setIsProfileDropdown] = useState(false);
  const toggleProfileDropdown = () => {
    setIsProfileDropdown(!isProfileDropdown);
  };
  return (
    <>
      <Dropdown
        isOpen={isProfileDropdown}
        toggle={toggleProfileDropdown}
        className="ms-sm-3 header-item topbar-user"
      >
        <DropdownToggle tag="button" type="button" className="btn">
          <span className="d-flex align-items-center">
            <img
              className="rounded-circle header-profile-user"
              src={"/assets/images/users/avatar-5.jpg"}
              alt="Header Avatar"
            />
            <span className="text-start ms-xl-2">
              <span className="d-none d-xl-inline-block ms-1 fw-medium user-name-text">
                {user?.first_name + " " + user?.last_name}
              </span>
              <span className="d-none d-xl-block ms-1 fs-12 text-muted user-name-sub-text">
                Üye
              </span>
            </span>
          </span>
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu-end">
          <h6 className="dropdown-header">Hoş geldin {user?.first_name}!</h6>
          <DropdownItem href="/profil">
            <i className="mdi mdi-account-circle text-muted fs-16 align-middle me-1"></i>
            <span className="align-middle">Profil</span>
          </DropdownItem>
          <DropdownItem href="/portfoy">
            <i className="mdi mdi-message-text-outline text-muted fs-16 align-middle me-1"></i>{" "}
            <span className="align-middle">Portföy</span>
          </DropdownItem>
          <DropdownItem href="/yardim">
            <i className="mdi mdi-lifebuoy text-muted fs-16 align-middle me-1"></i>{" "}
            <span className="align-middle">Yardım</span>
          </DropdownItem>
          <div className="dropdown-divider"></div>
          <DropdownItem href="/pages-profile">
            <i className="mdi mdi-wallet text-muted fs-16 align-middle me-1"></i>{" "}
            <span className="align-middle">
              Portföy : <b>$5971.67</b>
            </span>
          </DropdownItem>
          <DropdownItem href="/pages-profile-settings">
            <span className="badge bg-soft-success text-success mt-1 float-end">
              New
            </span>
            <i className="mdi mdi-cog-outline text-muted fs-16 align-middle me-1"></i>{" "}
            <span className="align-middle">Ayarlar</span>
          </DropdownItem>
          <DropdownItem onClick={() => signOut()}>
            <i className="mdi mdi-logout text-muted fs-16 align-middle me-1"></i>{" "}
            <span className="align-middle" data-key="t-logout">
              Çıkış
            </span>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
}

export default ProfileDropdown;
