import "../../styles/auth/Register.css";
import "../../styles/Const.css";
import { useState, useEffect } from "react";
import { initial_registration_form_data } from "../../dataSchema/schemas.js";
import { displayHandler, displaySwitch } from "../../functions/ConstFunctions";
import { resolve } from "../../functions/ConstVars";
import { Link } from "react-router-dom";

export default function Register({ auth_stat }) {
  const display_handler = new displayHandler();
  const display_switch = new displaySwitch();
  let [auth_state, setfirst] = useState(auth_stat);

  const [formdata, setFormData] = useState(initial_registration_form_data);
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
  const handleSubmit = async (_formdata) => {
    fetch(`${resolve}/velocity_knight_trainer/register/`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(_formdata),
    })
      .then((res) => res.json())
      .then(async (res) => {
        (await res.success)
          ? await display_switch.displaySuccessMessage(
              "reg-success",
              "reg-form",
              "reg-form-cont"
            )
          : console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="reg-form-cont fill m-auto center-content">
      <div className="reg-success center-content d-none">
        <p className="text-center bg-success center-content">
          You have successfully registered.
        </p>
      </div>
      <form
        className="reg-form flex-col m-auto"
        method="post"
        autoComplete="true"
      >
        <h2 className="fill m-0 center-content fw-bold">REGISTER</h2>
        <div className="d-flex wrap">
          <label htmlFor="reg_user_name">Username</label>
          <input
            type="text"
            minLength={3}
            onChange={handleChange}
            name="reg_user_name"
            className="reg_user_name b-none"
            placeholder="UserName"
            required
          ></input>
        </div>
        <div className="d-flex wrap">
          <label htmlFor="reg_email">Email</label>
          <input
            type="email"
            minLength={5}
            onChange={handleChange}
            name="reg_email"
            className="reg_email b-none"
            placeholder="Email"
            required
          ></input>
        </div>
        <div className="d-flex wrap">
          <label htmlFor="reg_password">Password</label>
          <input
            type="password"
            onChange={handleChange}
            name="reg_password"
            className="reg_password err_password b-none"
            placeholder="Password"
            required
          ></input>
        </div>
        <div className="d-flex wrap">
          <label htmlFor="reg_con_password">Confirm Password</label>
          <input
            type="password"
            onChange={handleChange}
            name="reg_con_password"
            className="reg_con_password err_password b-none"
            placeholder="Confirm password"
            required
          ></input>
        </div>
        <button
          className="register-button b-none fw-bold login-button
                    center-content m-auto-hor"
          onClick={(e) => {
            e.preventDefault();
            formdata.reg_con_password === formdata.reg_password
              ? handleSubmit(formdata)
              : inputErrorHighlight("err_password");
          }}
        >
          <i class="bi bi-caret-right-fill"></i>
          Register
          <i class="bi bi-caret-left-fill"></i>
        </button>
        <Link to={"/app/auth/user/login"} className="links fill center-content">
          Login
        </Link>
      </form>
    </div>
  );
}
