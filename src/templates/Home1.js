import "../styles/Home.css";
import "../styles/Const.css";
import one from "../assets/0.jpg";
import { useState, useEffect } from "react";
import { initial_registration_form_data } from "../dataSchema/schemas.js";

export default function Home1() {
  let [first, setfirst] = useState(0);
  function IncNum(first) {
    setfirst(first + 1);
  }
  setInterval(() => IncNum(first), 1000);

  const [formdata, setFormData] = useState(initial_registration_form_data);
  const display = () => console.log(formdata);
  const handleChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };
  function inputErrorHighlight(error_selector) {
    let _inputs = document.querySelectorAll(`.${error_selector}`);
    _inputs.forEach(
      (el) =>
        (el.style.boxShadow =
          "1.5px 1.5px 1px rgba(220,22,11,.6),-1.5px -1.5px 1px rgba(220,22,11,.6)")
    );
  }
  // let  PostRegData= () =>

  // useEffect(() => {

  // }, [])

  const handleSubmit = async (_formdata) => {
    display();
    fetch("http://localhost:3070/velocity_knight_trainer/register/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(_formdata),
    })
      .then((res) => console.log(res.json()))
      .catch((err) => console.log(err));
  };

  return (
    <div className="home-cont d-flex">
      <div className="reg-form-cont center-content">
        <form className="reg-form flex-col  center-content" method="post">
          <p className="m-0 w-100 center-content fw-bold">Register</p>
          <input
            type="text"
            minLength={3}
            onChange={handleChange}
            name="reg_user_name"
            className="reg_user_name b-none"
            placeholder="UserName"
            required
          ></input>
          <input
            type="email"
            minLength={5}
            onChange={handleChange}
            name="reg_email"
            className="reg_email b-none"
            placeholder="Email"
            required
          ></input>
          <input
            type="password"
            onChange={handleChange}
            name="reg_password"
            className="reg_password err_password b-none"
            placeholder="Password"
            required
          ></input>
          <input
            type="password"
            onChange={handleChange}
            name="reg_con_password"
            className="reg_con_password err_password b-none"
            placeholder="Confirm password"
            required
          ></input>
          <button
            className="b-none fw-bold"
            onClick={(e) => {
              e.preventDefault();
              formdata.reg_con_password === formdata.reg_password
                ? handleSubmit(formdata)
                : inputErrorHighlight("err_password");
            }}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
