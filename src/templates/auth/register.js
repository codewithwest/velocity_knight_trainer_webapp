import "../../styles/auth/Register.css";
import "../../styles/constants.css";
import { useEffect, useMemo, useState } from "react";
import { initial_registration_form_data } from "../../providers/data_schema/schemas.js";
import { Link, useNavigate } from "react-router-dom";
import { register_user } from "../../providers/data_schema/graphql/user.js";
import { useMutation } from "@apollo/client";
import Loader from "../components/loader.js";

export default function Register({ auth_stat }) {
  // let [auth_state, setfirst] = useState(auth_stat);
  const navigate = useNavigate();

  const [formdata, setFormData] = useState(initial_registration_form_data);
  const [user_data, setUserData] = useState();
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

  const [register, { loading, data, error }] = useMutation(register_user, {
    variables: { input: formdata }
  })

  const handleSubmit = () => {
    delete formdata.con_password
    setFormData(formdata)
    register()
  }


  let res_data = useMemo(() => {

    if (loading) {
      return [" "]
    } else if (data) {
      return data?.createUser
    } else {
      return error
    }

  }, [loading, data, error]);
  useEffect(() => {
    if (res_data?.id) {
      setUserData(res_data)
      navigate('/login')
    }
  }, [res_data, user_data, navigate])

  return (
    <div className="reg-form-cont fill m-auto center-content">
      {loading ? <Loader /> :
        (
          <form
            className="reg-form flex-col m-auto"
            method="post"
            autoComplete={true.toString()}
          >
            <h2 className="fill m-0 center-content fw-bold">REGISTER</h2>
            <div className="d-flex wrap">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                minLength={3}
                onChange={handleChange}
                name="username"
                className="reg_user_name b-none"
                placeholder="UserName"
                required
              ></input>
            </div>
            <div className="d-flex wrap">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                minLength={5}
                onChange={handleChange}
                name="email"
                className="reg_email b-none"
                placeholder="Email"
                required

              ></input>
            </div>
            <div className="d-flex wrap">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                onChange={handleChange}
                name="password"
                className="reg_password err_password b-none"
                placeholder="Password"
                required
              ></input>
            </div>
            <div className="d-flex wrap">
              <label htmlFor="con_password">Confirm Password</label>
              <input
                type="password"
                onChange={handleChange}
                name="con_password"
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
                formdata.con_password === formdata.password
                  ? handleSubmit()
                  : inputErrorHighlight("err_password");
              }}
            >
              <i className="bi bi-caret-right-fill"></i>
              Register
              <i className="bi bi-caret-left-fill"></i>
            </button>
            <Link to={"/login"} className="links fill center-content">
              Login
            </Link>
          </form>
        )}
    </div>
  );
}
