import { Link } from "react-router-dom";
import logo from "../../assets/0.jpg";
import "../../styles/partials/LandingNav.css";
import "../../App.css";
import { useState } from "react";

export default function LandingNavBar() {
  const [curLocal, setcurLocal] = useState(document.location.pathname !== '/'?1:0);
  const updateIcon = (e) => setcurLocal(curLocal == 0 ? 1 : 0);
  return (
    <nav className="landing-nav d-flex w-100 j-sb">
      <Link to={"/"} className="logo">
        <img src={logo} className="fill border-circle" alt="" />
      </Link>
      <h4>Velocity Knight Trainer</h4>

      <div className="popup">
        <Link
          to={curLocal == 0 ? "/app/auth/user/login" : "/ "}
          className="popup center-content"
        >
          {curLocal == 0 ?
            <>
              <i onClick={updateIcon} className="bi bi-person-fill-lock m-auto"></i>
              <div className="popuptext">Login</div>
            </>
            :
            <>
              <i onClick={updateIcon} className="bi bi-house-fill m-auto"></i>
              <div className="popuptext">Home</div>
            </>
          }
        </Link>
      </div>
    </nav>
  );
}
