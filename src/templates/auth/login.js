import "../../styles/auth/Login.css";
import "../../styles/constants.css";
import { useEffect, useMemo, useState } from "react";
import { initial_login_form_data } from "../../dataSchema/schemas.js";
import { displayHandler, displaySwitch } from "../../functions/const_functions.js";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import user_queries_mutations from "../../dataSchema/graphql/user.js";

export default function Login(props) {
  const navigate = useNavigate();

  const display_handler = new displayHandler();
  const display_switch = new displaySwitch();
  // function handleLoginState(val) {
  //   props.onChange(!val);
  // }
  const [formdata, setFormData] = useState(initial_login_form_data);
  const [user_data, setUserData] = useState();
  const [response_message, setLoginRespenseMessage] = useState();
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

  const [register, { loading, data, error }] = useMutation(user_queries_mutations.login_user, {
    variables: { input: formdata }
  })

  const handleSubmit = (e) => {
    setFormData(formdata)
    register()
  }


  let res_data = useMemo(() => {

    if (loading) {
      return [" "]
    } else if (data) {
      return data?.loginUser
      // return data
    } else {
      return error
    }

  }, [loading, data, error]);
  // };
  useEffect(() => {
    if (res_data?.id) {
      setUserData(res_data)
      const display_switch = new displaySwitch();
      loginMessage(user_data)
      // console.error(user_data?.id)
      setTimeout(() => navigate('/'), 5)
    }
  }, [res_data, user_data])

  function loginMessage(login_response) {
    if (login_response?.token) {
      sessionStorage.setItem("token", login_response?.token);
      setLoginRespenseMessage("Successfully Logged In");
      // display_switch.displaySuccessMessage(
      //   "login-success",
      //   "login-form",
      //   "login-form-cont"
      // );
      props.onChange();
      // sessionCookies.set('access_token', response.headers['x-access-token'])
      // document.location.reload();

    } else {
      console.log(login_response?.failure);
      setLoginRespenseMessage(login_response?.failure);
      // display_switch.displaySuccessMessage(
      //   "login-success",
      //   "login-form",
      //   "login-form-cont"
      // );
      // setTimeout(() => display_handler.displayFlex("login-form-cont"), 1000);
    }
  }
  return (
    <div className="login-form-cont pos-abs d-flex">
      <div className="login-success center-content d-none">
        <p className="text-center bg-success center-content">
          {user_data ? user_data.message : "Sorry something went wrong!🙁 please try again"}
        </p>
      </div>
      <h1>{props.value}</h1>
      <form className="login-form flex-col m-auto pos-rel" method="post" autoComplete>
        <h1 className="fill m-0 center-content fw-bold">LOGIN</h1>
        <div className="d-flex wrap">
          <label htmlFor="email">Email</label>
          <input
            onChange={handleChange}
            type={"email"}
            minLength={5}
            name="email"
            className={"login_email login_err m-auto-hor b-none"}
            placeholder={"Email"}
            required
          ></input>
        </div>
        <div className="d-flex wrap">
          <label htmlFor="password">Password</label>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            className="login_password m-auto-hor d-flex login_err b-none "
            placeholder="Password"
            required
          ></input>
        </div>
        <button
          className="b-none fw-bold login-button 
                    center-content m-auto-hor"
          onClick={(e) => {
            e.preventDefault();
            formdata.email.length > 3 &&
              formdata.password.length > 3
              ? handleSubmit()
              : inputErrorHighlight("login_err");
          }}
        >
          <i className="bi bi-shield-lock-fill"></i> Login
        </button>
        <Link
          to={"/register"}
          className="links fill center-content"
        >
          Register
        </Link>
      </form>
      {/* </div> */}
    </div>
  );
}
