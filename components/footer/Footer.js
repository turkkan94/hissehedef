import React from "react";
function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6">{new Date().getFullYear()} © Velzon.</div>
            <div className="col-sm-6">
              <div className="text-sm-end d-none d-sm-block">
                Design & Develop by Themesbrand
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
