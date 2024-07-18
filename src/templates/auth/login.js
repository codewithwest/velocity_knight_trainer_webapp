import "../../styles/auth/login.css";
import "../../styles/constants.css";
import { useEffect, useMemo, useState } from "react";
import { initial_login_form_data } from "../../providers/data_schema/schemas.js";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import user_queries_mutations from "../../providers/data_schema/graphql/user.js";
import Loader from '../../templates/components/loader.js'

export default function Login(props) {
  const navigate = useNavigate();

  const [formdata, setFormData] = useState(initial_login_form_data);
  const [user_data, setUserData] = useState();
  // const [response_message, setLoginRespenseMessage] = useState();
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

  const handleSubmit = () => {
    setFormData(formdata)
    register()
  }


  let login_response = useMemo(() => {
    if (loading) return [" "]
    else if (data) return data?.loginUser
    else return error
  }, [loading, data, error]);

  useEffect(() => {
    if (login_response?.id) {
      setUserData(login_response)
      console.error(login_response?.message)
      sessionStorage.setItem("token", login_response?.token);
      setTimeout(() => navigate('/'), 5)
    }
  }, [login_response, user_data])

  return (
    <div className="login-form-cont pos-abs d-flex center-content">
      {loading ? <Loader />
        : (
          <>
            <h1>{props.value}</h1>
            <form className="login-form flex-col m-auto pos-rel"
              method="post">
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
                  autoComplete={true.toString()}
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
                  autoComplete={true.toString()}
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
          </>
        )}
    </div>
  );

}
