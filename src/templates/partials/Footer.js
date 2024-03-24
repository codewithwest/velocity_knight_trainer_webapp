import { Link } from "react-router-dom";
import logo from "../../assets/0.jpg";
import "../../styles/partials/Footer.css";
import "../../App.css";
import { useState } from "react";
import { main_logo } from "../../functions/imageProvider";

export default function Footer() {
  var arrow = <i class="bi bi-caret-right-fill"></i>;

  return (
    <>
      <footer className="footer d-flex wrap">
        <div className="d-flex wrap">
          <h5>
            <i className="bi bi-lightning-fill"></i>
            Velocity Knight Trainer
            <i className="bi bi-lightning-fill"></i>
          </h5>
          <div className="d-flex">
            <img src={main_logo} alt="" />
            <small>
              This tech innovation is property of WestDynamics powered by
              westdynamics.tech
            </small>
          </div>
          <small className="w-100">
            Faster, Further, Higher
            <i className="bi bi-lightning-fill"></i>
          </small>
        </div>
        <div className="flex-col">
          <h5 className="text-center">Get around</h5>
          <ul className="flex-col">
            <Link to={"/"}>
              {arrow}
              Home
            </Link>

            <Link to={"/app/about"}>
              {arrow}
              About
            </Link>
            <Link to={"/app/more"}>
              {arrow}
              More
            </Link>
            <Link to={"/app/vision"}>
              {arrow}
              Vision
            </Link>
            <Link to={"/app/feedback"}>
              {arrow}
              Feedback
            </Link>
            <Link to={"/app/feedback"}>
              {arrow}
              Contact Us
            </Link>
          </ul>
        </div>
        <div className="flex-col j-sa">
          <h5>Keep Up with us</h5>
          <h6>Socials</h6>

          <div className="d-flex wrap center-content">
            <a href="https://github.com/codewithwest">
              <i className="bi bi-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/codewithwest">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="">
              <i className="bi bi-whatsapp"></i>
            </a>
            <a href="">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="">
              <i className="bi bi-slack"></i>
            </a>
            <a href="">
              <i className="bi bi-medium"></i>
            </a>
            <a href="">
              <i className="bi bi-discord"></i>
            </a>
          </div>
          <h6>Get Platform Apps</h6>
          <div className="center-content">
            <Link to={""}>
              <i className="bi bi-android"></i>
            </Link>
            <Link to={""}>
              <i className="bi bi-apple"></i>
            </Link>
            <Link to={""}>
              <i className="bi bi-windows"></i>
            </Link>
          </div>
        </div>
      </footer>
      <div className="by-lines d-flex wrap center-content">
        <p>
          {" "}
          <a href="https://github.com/codewithwest" className="links">
            codewithwest <i className="bi bi-github"></i>
          </a>
        </p>
        <p>© @WestDynamics Inc, since 2021</p>
        <p>
          {" "}
          <a href="https://westdynamics.tech" className="links">
            powered by © westdynamics.tech 2023{" "}
          </a>
        </p>
      </div>
    </>
  );
}
