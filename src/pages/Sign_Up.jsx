import React from "react";
import { Link } from "react-router-dom";
import SignNavbar from "../component/SignNavbar";

const Sign_Up = () => {
  return (
    <>
      <SignNavbar/>
      <section class="vh-100 bg-image">
        <div
          class="bg-holder"
          style={{
            backgroundImage: "url(assets/img/illustrations/how-it-works.png)",
            backgroundPosition: "center bottom",
            backgroundsize: "cover",
          }}
        ></div>

        <div class=" h-100 ">
          <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                <div class="card" style={{ borderradius: "15px" }}>
                  <div class="card-body p-5">
                    <h2 class="text-uppercase text-center mb-2">Giriş Yap</h2>

                    <form style={{ margin: " 0 auto", maxHeight: "470px" }}>
                      <div data-mdb-input-init class="form-outline mb-3">
                        <input
                          type="email"
                          id="form3Example3cg"
                          class="form-control form-control-lg"
                        />
                        <label class="form-label" for="form3Example3cg">
                          Your Email
                        </label>
                      </div>

                      <div data-mdb-input-init class="form-outline mb-3">
                        <input
                          type="password"
                          id="form3Example4cg"
                          class="form-control form-control-lg"
                        />
                        <label class="form-label" for="form3Example4cg">
                          Password
                        </label>
                      </div>

                      <div class="d-flex justify-content-center">
                        {/*<button type="button" data-mdb-button-init
                    data-mdb-ripple-init class="btn btn-success btn-block btn-lg gradient-custom-4 ">Giriş Yap</button>    */}

                        <Link
                          to={"/home"}
                          className="btn btn-success btn-block btn-lg gradient-custom-4"
                        >
                          Giriş Yap
                        </Link>
                      </div>

                      <p class="text-center text-muted mt-4 mb-0">
                        Hesabın yok mu ?{" "}
                        <a
                          Link
                          to={"/signin/"}
                          href="#!"
                          class="fw-bold text-body"
                        >
                          <u>
                            <Link to={"/Signin"} className="fw-bold text-body">
                              Kayıt Ol
                            </Link>
                          </u>
                        </a>
                      </p>

                      <div
                        class="text-center text-muted mt-4 mb-0"
                        id="gSignInWrapper"
                      >
                        <span class="label">Google ile giriş yap: </span>
                        <div id="customBtn" class="customGPlusSignIn">
                          <span class="icon"></span>
                          <span class="buttonText">Google</span>
                        </div>
                      </div>
                      <div id="name"></div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sign_Up;
