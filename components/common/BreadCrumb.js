"use client";
import Link from "next/link";
import React from "react";

function BreadCrumb({ title, pageTitle }) {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="page-title-box d-sm-flex align-items-center justify-content-between">
            <h4 className="mb-sm-0">{title}</h4>
            <div className="page-title-right">
              <ol className="breadcrumb m-0">
                <li className="breadcrumb-item">
                  <Link href={`/${pageTitle.toLowerCase()}`}>{pageTitle}</Link>
                </li>
                <li className="breadcrumb-item active">
                  {title.toUpperCase()}
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BreadCrumb;
