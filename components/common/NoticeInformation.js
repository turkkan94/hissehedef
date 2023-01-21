import React from "react";
import { Alert, Card, CardBody, Col, Row } from "reactstrap";
//Import Icons
import FeatherIcon from "feather-icons-react";
import Link from "next/link";

const NoticeInformation = () => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-xs-12">
          <div className="card" style={{ height: 240 }}>
            <div className="card-body p-0">
              <div
                className="bg-soft-warning p-3 border-0 rounded-top rounded-0 m-0 d-flex align-items-center"
                role="alert"
              >
                <FeatherIcon
                  icon="alert-triangle"
                  className="text-warning me-2 icon-sm"
                />
                <div className="text-warning flex-grow-1 text-truncate">
                  Hisse hedef fiyat hesaplaması yapmak için öncelikle yardımcı
                  sitelerden Bist 100 ve sektör F/K ortalamalarını
                  öğrenmelisiniz.
                </div>
              </div>

              <div className="row align-items-start">
                <div className="col-12">
                  <div className="p-4">
                    <p className="fs-16 lh-base m-0">
                      Ziraat Yatırım sitesinden Bist 100 endeks ortalaması ve
                      hisseye göre sektör ortalamalarını öğrenebilirsiniz.
                      <br />
                      <br />
                      <Link
                        href="https://www.ziraatyatirim.com.tr/tr/gunluk-sirket-getiri-ve-carpanlari"
                        className="btn btn-danger text-truncate"
                        target="_blank"
                      >
                        Ziraat Yatırım <i className="mdi mdi-arrow-right"></i>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NoticeInformation;
