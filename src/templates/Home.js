import "../styles/Home.css";
import "../styles/Const.css";
import "../styles/vkTrainerAnim.css";

import img from "../assets/0.jpg";
import { Link } from "react-router-dom";
export function Home() {
  return (
    <div className="home-cont d-flex wrap">
      {vkTrainerAnimation()}
      {introCards()}
      <div className="welcome d-flex">
        <h2 className="text-center w-100">
          Welcome To Velocity Knight Trainer
        </h2>
      </div>
      {whoBox()}
      {floatingBtns()}

      <h2 className="m-auto our-partners-header">Our Partners</h2>
      <div className="our-partners d-flex wrap w-100">
        {ourPartners("name", img)}
        {ourPartners("name", img)}
        {ourPartners("name", img)}
        {ourPartners("name", img)}
      </div>
    </div>
  );

  function floatingBtns() {
    return (
      <div className="floating-btns-cont d-flex wrap j-sa w-100">
        <Link to="/app/about" className="d-flex">
          <p>Explore</p>
          <i
            class="bi bi-arrow-up-right-circle text-info"
            style={{ fontSize: 40 }}
          ></i>
        </Link>
        <Link to="/app/more" className="d-flex">
          <p>Find Out More</p>

          <i
            class="bi bi-arrow-down-circle text-info"
            style={{ fontSize: 40 }}
          ></i>
        </Link>
        <Link to="/app/about" className="d-flex">
          <p>Donate</p>
          <i
            class="bi bi-arrow-up-circle text-info"
            style={{ fontSize: 40 }}
          ></i>
        </Link>
      </div>
    );
  }
  function introCards() {
    return (
      <div className="intro-cont d-flex wrap">
        <div className="left-card flex-col">
          <h3>Efficiency & Convinience</h3>
          <p>
            I know what you thinking? is this for real? Yes it is! with{" "}
            <b>Velocity Knight Trainer</b> you can bring all your training
            convieniences under one roof. Coach or Athlete? It doesn't matter we
            bring it to you to lift of your progression and documenting in one
            place, and you and your coach can focus on the rest.
            <br />
            <br />
            Let's get Fit, Fast and Stronger Together!
          </p>
          <Link to="/app/more" className="d-flex center-content">
            <p className="m-auto-vert">Find Out More</p>
            <i class="bi bi-arrow-down-right-circle text-info"></i>
          </Link>
        </div>
        <div className="right-card flex-col">
          <h3>What we offer</h3>
          <p>
            We offer a digital memory book, you add we store, we keep and you
            can access it secure anywhere and anytime, you can convert it to
            word or pdf and keep it even safer. You get alerts on the latest
            updates from your coach and any changes that come up.
            <br />
            <br />
            Ready? Let's see more Features.
          </p>
          <Link to="/app/about" className="d-flex center-content">
            <p className="m-auto-vert">See More</p>{" "}
            <i class="bi bi-arrow-down-right-circle text-info"></i>
          </Link>
        </div>
      </div>
    );
  }
  function whoBox() {
    return (
      <div className="who d-flex wrap">
        <div className="img-cont flex-wrap">
          <img src={img} alt="" className="fill" />
          <h5 className="text-center">By WestDynamics</h5>
        </div>
        <div className="body flex-col h-100">
          <h3 className="header">West Dynamics</h3>
          <div className="content">
            We are a tech company that aims to aid athlete with better managing
            their careers from ameture, pro and to retirement,
            <br />
            <br />
            We keep them and you can take a trip down memory lane wherever
            whenever.
            <br />
            <br />
            by Athletes for Athletes
            <br />
            <br />
            <b>
              This is VK Trainer
              <i className="bi bi-lightning-fill"></i>
            </b>
          </div>
          <div className="footer d-flex">
            <Link to="/app/about" className="d-flex   link">
              <i
                class="bi bi-arrow-down-right-circle text-info"
                style={{ fontSize: 40 }}
              ></i>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  function ourPartners(name, image) {
    return (
      <div className="partner-cont flex-col">
        <img src={image} alt="" className="m-auto" />
        <h4 className="m-auto">{name}</h4>
      </div>
    );
  }
  function vkTrainerAnimation(name, image) {
    return (
      <div className="vk-trainer-anim d-flex m-auto-hor">
        <div className="">S</div>
        <div className="">T</div>
        <div className="">A</div>
        <div className="">R</div>
        <div className="">T</div>
      </div>
    );
  }
}
