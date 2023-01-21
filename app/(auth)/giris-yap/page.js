"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState, useContext } from "react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  // useEffect(() => {
  //   if (error) {
  //     console.log(error);
  //   }

  //   if (isAuthenticated && !loading) {
  //     router.push("/");
  //   }
  // }, [isAuthenticated, error, loading]);

  // const submitHandler = async (e) => {
  //   e.preventDefault();
  //   const result = await signIn("credentials", {
  //     username: email,
  //     password: password,
  //     redirect: true,
  //     callbackUrl: "/",
  //   });
  // };

  const submitHandler = async (e) => {
    e.preventDefault();
    signIn("credentials", { username: email, password, redirect: false }).then(
      ({ ok, error }) => {
        if (ok) {
          router.push("/");
        } else {
          console.log(error);
        }
      }
    );
  };
  return (
    <>
      <div className="auth-page-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center mt-sm-5 mb-4 text-white-50">
                <div>
                  <Link href="/" className="d-inline-block auth-logo">
                    <img
                      src={"/assets/images/logo-light.png"}
                      alt=""
                      height="20"
                    />
                  </Link>
                </div>
                <p className="mt-3 fs-15 fw-medium">
                  Hisse ve Endeks Bilgi Platformu
                </p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6 col-xl-5">
              <div className="card mt-4">
                <div className="card- body p-4">
                  <div className="text-center mt-2">
                    <h5 className="text-primary">Hoş Geldiniz !</h5>
                    <p className="text-muted">
                      Siteye devam etmek için giriş yapınız.
                    </p>
                  </div>
                  {/* {error && error ? (
                    <div className="alert alert-danger"> {error} </div>
                  ) : null} */}
                  <div className="p-2 mt-4">
                    <form onSubmit={submitHandler}>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                          Mail
                        </label>
                        <input
                          name="email"
                          className="form-control"
                          placeholder="Mail adresini gir"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          pattern="\S+@\S+\.\S+"
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <div className="float-end">
                          <Link href="/sifremi-unuttum" className="text-muted">
                            Şifremi unuttum?
                          </Link>
                        </div>
                        <label className="form-label" htmlFor="password-input">
                          Şifre
                        </label>
                        <div className="position-relative auth-pass-inputgroup mb-3">
                          <input
                            name="password"
                            type="password"
                            className="form-control pe-5"
                            placeholder="Şifreni gir"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />

                          <button
                            className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted"
                            type="button"
                            id="password-addon"
                          >
                            <i className="ri-eye-fill align-middle"></i>
                          </button>
                        </div>
                      </div>

                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="auth-remember-check"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="auth-remember-check"
                        >
                          Beni Hatırla
                        </label>
                      </div>

                      <div className="mt-4">
                        <button
                          color="success"
                          className="btn btn-success w-100"
                          type="submit"
                        >
                          Giriş Yap
                        </button>
                      </div>

                      {/* <div className="mt-4 text-center">
                        <div className="signin-other-title">
                          <h5 className="fs-13 mb-4 title">Sign In with</h5>
                        </div>
                        +
                        <div>
                          <FacebookLogin
                            appId={facebook.APP_ID}
                            autoLoad={false}
                            callback={facebookResponse}
                            render={(renderProps) => (
                              <Button
                                color="primary"
                                className="btn-icon me-1"
                                onClick={renderProps.onClick}
                              >
                                <i className="ri-facebook-fill fs-16" />
                              </Button>
                            )}
                          />
                          <GoogleLogin
                            clientId={google.CLIENT_ID ? google.CLIENT_ID : ""}
                            render={(renderProps) => (
                              <Button
                                color="danger"
                                href="#"
                                className="btn-icon me-1"
                                onClick={renderProps.onClick}
                              >
                                <i className="ri-google-fill fs-16" />
                              </Button>
                            )}
                            onSuccess={googleResponse}
                            onFailure={() => {}}
                          />
                          <button
                            color="dark"
                            className="btn btn-icon btn btn-dark"
                          >
                            <i className="ri-github-fill fs-16"></i>
                          </button>{" "}
                          <button
                            color="info"
                            className="btn btn-icon btn btn-info"
                          >
                            <i className="ri-twitter-fill fs-16"></i>
                          </button>
                        </div>
                      </div> */}
                    </form>
                  </div>
                </div>
              </div>

              <div className="mt-4 text-center">
                <p className="mb-0">
                  Henüz kayıt olmadınız mı ?{" "}
                  <Link
                    href="#"
                    className="fw-semibold text-primary text-decoration-underline"
                  >
                    {" "}
                    Kayıt Ol{" "}
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
