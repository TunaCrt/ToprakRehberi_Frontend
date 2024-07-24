import React from "react";
import { Link } from "react-router-dom";

const SignNavbar = () => {
  return (
    <nav
      class="navbar navbar-expand-lg navbar-light fixed-top py-3 bg-light opacity-85"
      data-navbar-on-scroll="data-navbar-on-scroll"
    >
      <div class="container">
        <a class="navbar-brand">
          <img
            class="d-inline-block align-top img-fluid"
            src="assets/img/gallery/logo-icon.png"
            alt=""
            width="50"
          />
          <Link to={"/"} className="text-theme font-monospace fs-4 ps-2">
            Toprak Rehberi
          </Link>
        </a>
        <button
          class="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item px-2">
              <a aria-current="page" >
              <Link to={"/"} className="nav-link fw-medium">
              Ana Sayfa
            </Link>
              </a>
            </li>
            
          </ul>
          
        </div>
      </div>
    </nav>
  );
};

export default SignNavbar;
