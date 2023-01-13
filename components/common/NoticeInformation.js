import React from "react";
import { Alert, Card, CardBody, Col, Row } from "reactstrap";
//Import Icons
import FeatherIcon from "feather-icons-react";
import Link from "next/link";
import Image from "next/Image";

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
                <div className="col-sm-8">
                  <div className="p-4">
                    <p className="fs-16 lh-base m-0">
                      Yandaki sitelerden gerekli olan Endeks F/K ortalaması ve
                      sektör F/K ortalamasını öğrenebilirsiniz.
                      <i className="mdi mdi-arrow-right"></i>
                      <br />
                      <br />
                      Hisse hedef hesaplaması doğru nasıl yapılır? İpuçları
                      nelerdir öğrenmek için buradaki konuyu inceleyiniz...
                    </p>
                  </div>
                </div>
                <div className="col-sm-4 d-flex flex-column align-items-center p-3">
                  <div className="mb-4">
                    <span className="text-success">Yardımcı Siteler</span>
                  </div>
                  <div className="px-3 d-flex flex-row align-items-center justify-content-end">
                    <Link
                      href="https://www.isyatirim.com.tr/tr-tr/analiz/hisse/Sayfalar/Temel-Degerler-Ve-Oranlar.aspx#page-1"
                      className="btn btn-success me-3 text-truncate"
                      target="_blank"
                    >
                      Sektör F/K
                    </Link>
                    <Link
                      href="https://docs.google.com/spreadsheets/d/1CnlcWGYQM2ahqF_OEBir2kAMGnX-MzrpoFI9zxjzQiY/"
                      className="btn btn-primary text-truncate"
                      target="_blank"
                    >
                      Bist 100 F/K
                    </Link>
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
