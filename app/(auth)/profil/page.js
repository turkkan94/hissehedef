"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  Input,
  Label,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import Link from "next/link";
import { useSession } from "next-auth/react";
import classnames from "classnames";
import { useRouter } from "next/navigation";

function UserPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [user, setUser] = useState();
  const [firstName, setFirstName] = useState(user?.first_name);
  const [lastName, setLastName] = useState(user?.last_name);
  const [email, setEmail] = useState(user?.email);
  const [password, setPassword] = useState(user?.password);
  const [phone, setPhone] = useState(user?.phone);
  const [job, setJob] = useState(user?.job);
  const [instagram, setInstagram] = useState(user?.instagram);
  const [twitter, setTwitter] = useState(user?.twitter);
  const [web, setWeb] = useState(user?.web);
  const [access, setAccess] = useState(null);

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
        setFirstName(data.first_name);
        setLastName(data.last_name);
        setEmail(data.email);
        setPassword("123456");
        setPhone(data.phone);
        setJob(data.job);
        setInstagram(data.instagram);
        setTwitter(data.twitter);
        setWeb(data.web);
        setAccess(session.user.access);
      }
    };
    getUser();
  }, [session]);

  const updateProfile = async () => {
    try {
      const res = await axios.put(
        `${process.env.MAIN_API}/me/update/`,
        {
          first_name: firstName,
          last_name: lastName,
          email,
          phone,
          job,
          instagram,
          twitter,
          web,
        },
        {
          headers: {
            Authorization: `Bearer ${access}`,
          },
        }
      );
      if (res.data) {
        // router.push("/profil");
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  const [activeTab, setActiveTab] = useState("1");

  const tabChange = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div className="page-content">
      <div className="container-fluid">
        <div className="position-relative mx-n4 mt-n4">
          <div className="profile-wid-bg profile-setting-img">
            <img
              src={"/assets/images/profile-bg.jpg"}
              className="profile-wid-img"
              alt=""
            />
            {/* <div className="overlay-content">
              <div className="text-end p-3">
                <div className="p-0 ms-auto rounded-circle profile-photo-edit">
                  <input
                    id="profile-foreground-img-file-input"
                    type="file"
                    className="profile-foreground-img-file-input"
                  />
                  <label
                    htmlFor="profile-foreground-img-file-input"
                    className="profile-photo-edit btn btn-light"
                  >
                    <i className="ri-image-edit-line align-bottom me-1"></i>{" "}
                    Change Cover
                  </label>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-3">
            <div className="card mt-n5">
              <div className="card-body p-4">
                <div className="text-center">
                  <div className="profile-user position-relative d-inline-block mx-auto  mb-4">
                    <img
                      src={"/assets/images/users/avatar-1.jpg"}
                      className="rounded-circle avatar-xl img-thumbnail user-profile-image"
                      alt="user-profile"
                    />
                    <div className="avatar-xs p-0 rounded-circle profile-photo-edit">
                      <input
                        id="profile-img-file-input"
                        type="file"
                        className="profile-img-file-input"
                      />
                      <label
                        htmlFor="profile-img-file-input"
                        className="profile-photo-edit avatar-xs"
                      >
                        <span className="avatar-title rounded-circle bg-light text-body">
                          <i className="ri-camera-fill"></i>
                        </span>
                      </label>
                    </div>
                  </div>
                  <h5 className="mb-1 text-uppercase">
                    {user
                      ? user?.first_name + " " + user?.last_name
                      : "Kullanıcı Adı"}
                  </h5>
                  <p className="text-muted mb-0">Üye</p>
                </div>
              </div>
            </div>

            {/* <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center mb-5">
                  <div className="flex-grow-1">
                    <h5 className="card-title mb-0">Complete Your Profile</h5>
                  </div>
                  <div className="flex-shrink-0">
                    <Link
                      href="#"
                      className="badge bg-light text-primary fs-12"
                    >
                      <i className="ri-edit-box-line align-bottom me-1"></i>{" "}
                      Edit
                    </Link>
                  </div>
                </div>
                <div className="progress animated-progress custom-progress progress-label">
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "30%" }}
                    aria-valuenow="30"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div className="label">30%</div>
                  </div>
                </div>
              </div>
            </div> */}
            <Card>
              <CardBody>
                <div className="d-flex align-items-center mb-4">
                  <div className="flex-grow-1">
                    <h5 className="card-title mb-0">Sosyal & Web</h5>
                  </div>
                </div>
                <div className="mb-3 d-flex">
                  <div className="avatar-xs d-block flex-shrink-0 me-3">
                    <span className="avatar-title rounded-circle fs-16 bg-primary text-white">
                      <i className="ri-twitter-fill"></i>
                    </span>
                  </div>
                  <Input
                    type="text"
                    className="form-control"
                    id="twitterUsername"
                    placeholder="Twitter kullanıcı adı"
                    defaultValue={user?.twitter}
                    onChange={(e) => setTwitter(e.target.value)}
                  />
                </div>
                <div className="mb-3 d-flex">
                  <div className="avatar-xs d-block flex-shrink-0 me-3">
                    <span className="avatar-title rounded-circle fs-16 bg-danger text-white">
                      <i className="ri-instagram-fill"></i>
                    </span>
                  </div>
                  <Input
                    type="text"
                    className="form-control"
                    id="instagramUserName"
                    placeholder="Instagram kullanıcı adı"
                    defaultValue={user?.instagram}
                    onChange={(e) => setInstagram(e.target.value)}
                  />
                </div>
                <div className="mb-3 d-flex">
                  <div className="avatar-xs d-block flex-shrink-0 me-3">
                    <span className="avatar-title rounded-circle fs-16 bg-dark text-light">
                      <i className="ri-global-fill"></i>
                    </span>
                  </div>
                  <Input
                    type="text"
                    className="form-control"
                    id="websiteInput"
                    placeholder="www.hissehedef.com"
                    defaultValue={user?.web}
                    onChange={(e) => setWeb(e.target.value)}
                  />
                </div>
              </CardBody>
            </Card>
          </div>

          <Col xxl={9}>
            <Card className="mt-xxl-n5">
              <CardHeader>
                <Nav
                  className="nav-tabs-custom rounded card-header-tabs border-bottom-0"
                  role="tablist"
                >
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === "1" })}
                      onClick={() => {
                        tabChange("1");
                      }}
                    >
                      <i className="fas fa-home"></i>
                      Profili Düzenle
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="#"
                      className={classnames({ active: activeTab === "2" })}
                      onClick={() => {
                        tabChange("2");
                      }}
                      type="button"
                    >
                      <i className="far fa-user"></i>
                      Şifre Değiştir
                    </NavLink>
                  </NavItem>
                </Nav>
              </CardHeader>
              <CardBody className="p-4">
                <TabContent activeTab={activeTab}>
                  <TabPane tabId="1">
                    <form onSubmit={updateProfile}>
                      <Row>
                        <Col lg={6}>
                          <div className="mb-3">
                            <Label
                              htmlFor="firstnameInput"
                              className="form-label"
                            >
                              Ad
                            </Label>
                            <Input
                              type="text"
                              className="form-control"
                              id="firstnameInput"
                              placeholder="Adınızı giriniz "
                              defaultValue={user?.first_name}
                              onChange={(e) => setFirstName(e.target.value)}
                            />
                          </div>
                        </Col>
                        <Col lg={6}>
                          <div className="mb-3">
                            <Label
                              htmlFor="lastnameInput"
                              className="form-label"
                            >
                              Soyad
                            </Label>
                            <Input
                              type="text"
                              className="form-control"
                              id="lastnameInput"
                              placeholder="Soyadınızı giriniz."
                              defaultValue={user?.last_name}
                              onChange={(e) => setLastName(e.target.value)}
                            />
                          </div>
                        </Col>
                        <Col lg={6}>
                          <div className="mb-3">
                            <Label
                              htmlFor="phonenumberInput"
                              className="form-label"
                            >
                              Telefon Numarası
                            </Label>
                            <Input
                              type="text"
                              className="form-control"
                              id="phonenumberInput"
                              placeholder="Telefon numaranız"
                              defaultValue={user?.phone}
                              onChange={(e) => setPhone(e.target.value)}
                            />
                          </div>
                        </Col>
                        <Col lg={6}>
                          <div className="mb-3">
                            <Label htmlFor="emailInput" className="form-label">
                              Mail
                            </Label>
                            <Input
                              type="email"
                              className="form-control"
                              id="emailInput"
                              placeholder="Enter your email"
                              defaultValue={user?.email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                        </Col>

                        <Col lg={6}>
                          <div className="mb-3">
                            <Label
                              htmlFor="designationInput"
                              className="form-label"
                            >
                              Meslek
                            </Label>
                            <Input
                              type="text"
                              className="form-control"
                              id="designationInput"
                              placeholder="Designation"
                              defaultValue={user?.job}
                              onChange={(e) => setJob(e.target.value)}
                            />
                          </div>
                        </Col>
                        {/* <Col lg={6}>
                          <div className="mb-3">
                            <Label
                              htmlFor="websiteInput1"
                              className="form-label"
                            >
                              Web
                            </Label>
                            <Input
                              type="text"
                              className="form-control"
                              id="websiteInput1"
                              placeholder="www.example.com"
                              defaultValue={user?.web}

                            />
                          </div>
                        </Col> */}
                        {/* <Col lg={4}>
                          <div className="mb-3">
                            <Label htmlFor="cityInput" className="form-label">
                              Şehir
                            </Label>
                            <Input
                              type="text"
                              className="form-control"
                              id="cityInput"
                              placeholder="City"
                              defaultValue="California"
                            />
                          </div>
                        </Col>
                        <Col lg={4}>
                          <div className="mb-3">
                            <Label
                              htmlFor="countryInput"
                              className="form-label"
                            >
                              Ülke
                            </Label>
                            <Input
                              type="text"
                              className="form-control"
                              id="countryInput"
                              placeholder="Country"
                              defaultValue="United States"
                            />
                          </div>
                        </Col>
                        <Col lg={4}>
                          <div className="mb-3">
                            <Label
                              htmlFor="zipcodeInput"
                              className="form-label"
                            >
                              Posta Kodu
                            </Label>
                            <Input
                              type="text"
                              className="form-control"
                              minLength="5"
                              maxLength="6"
                              id="zipcodeInput"
                              placeholder="Enter zipcode"
                              defaultValue="90011"
                            />
                          </div>
                        </Col> */}

                        <Col lg={12}>
                          <div className="hstack gap-2 justify-content-end">
                            <button type="submit" className="btn btn-primary">
                              Güncelle
                            </button>
                          </div>
                        </Col>
                      </Row>
                    </form>
                  </TabPane>

                  <TabPane tabId="2">
                    <Form>
                      <Row className="g-2">
                        <Col lg={4}>
                          <div>
                            <Label
                              htmlFor="oldpasswordInput"
                              className="form-label"
                            >
                              Old Password*
                            </Label>
                            <Input
                              type="password"
                              className="form-control"
                              id="oldpasswordInput"
                              placeholder="Enter current password"
                            />
                          </div>
                        </Col>

                        <Col lg={4}>
                          <div>
                            <Label
                              htmlFor="newpasswordInput"
                              className="form-label"
                            >
                              New Password*
                            </Label>
                            <Input
                              type="password"
                              className="form-control"
                              id="newpasswordInput"
                              placeholder="Enter new password"
                            />
                          </div>
                        </Col>

                        <Col lg={4}>
                          <div>
                            <Label
                              htmlFor="confirmpasswordInput"
                              className="form-label"
                            >
                              Confirm Password*
                            </Label>
                            <Input
                              type="password"
                              className="form-control"
                              id="confirmpasswordInput"
                              placeholder="Confirm password"
                            />
                          </div>
                        </Col>

                        <Col lg={12}>
                          <div className="mb-3">
                            <Link
                              href="#"
                              className="link-primary text-decoration-underline"
                            >
                              Forgot Password ?
                            </Link>
                          </div>
                        </Col>

                        <Col lg={12}>
                          <div className="text-end">
                            <button type="button" className="btn btn-success">
                              Change Password
                            </button>
                          </div>
                        </Col>
                      </Row>
                    </Form>
                    <div className="mt-4 mb-3 border-bottom pb-2">
                      <div className="float-end">
                        <Link href="#" className="link-primary">
                          All Logout
                        </Link>
                      </div>
                      <h5 className="card-title">Login History</h5>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <div className="flex-shrink-0 avatar-sm">
                        <div className="avatar-title bg-light text-primary rounded-3 fs-18">
                          <i className="ri-smartphone-line"></i>
                        </div>
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h6 className="fs-15">iPhone 12 Pro</h6>
                        <p className="text-muted mb-0">
                          Los Angeles, United States - March 16 at 2:47PM
                        </p>
                      </div>
                      <div>
                        <Link href="#">Logout</Link>
                      </div>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <div className="flex-shrink-0 avatar-sm">
                        <div className="avatar-title bg-light text-primary rounded-3 fs-18">
                          <i className="ri-tablet-line"></i>
                        </div>
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h6 className="fs-15">Apple iPad Pro</h6>
                        <p className="text-muted mb-0">
                          Washington, United States - November 06 at 10:43AM
                        </p>
                      </div>
                      <div>
                        <Link href="#">Logout</Link>
                      </div>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <div className="flex-shrink-0 avatar-sm">
                        <div className="avatar-title bg-light text-primary rounded-3 fs-18">
                          <i className="ri-smartphone-line"></i>
                        </div>
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h6 className="fs-15">Galaxy S21 Ultra 5G</h6>
                        <p className="text-muted mb-0">
                          Conneticut, United States - June 12 at 3:24PM
                        </p>
                      </div>
                      <div>
                        <Link href="#">Logout</Link>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0 avatar-sm">
                        <div className="avatar-title bg-light text-primary rounded-3 fs-18">
                          <i className="ri-macbook-line"></i>
                        </div>
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h6 className="fs-15">Dell Inspiron 14</h6>
                        <p className="text-muted mb-0">
                          Phoenix, United States - July 26 at 8:10AM
                        </p>
                      </div>
                      <div>
                        <Link href="#">Logout</Link>
                      </div>
                    </div>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
        </div>
      </div>
    </div>
  );
}

export default UserPage;
