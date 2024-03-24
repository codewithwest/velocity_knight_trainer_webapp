import './App.css';
import { Suspense, lazy, useEffect, useState } from 'react';
import { displayHandler } from './functions/ConstFunctions';
import { logged_in_icon, logged_out_icon } from './functions/ConstIcons';
import { resolve } from './functions/ConstVars';
import { Route, Routes, Link } from "react-router-dom"
import { About, AthleteProfile, CreateSession, Footer, Home, LandingNavBar, Login, Register, SessionLog } from './functions/RoutesProvider';
import More from './templates/info/More';



const display_handler = new displayHandler()
function App() {
  var session_token = sessionStorage.getItem('token')
  const [initial_login_state, set_initial_login_state] = useState()
  const [login_data, setLoginData] = useState()
  useEffect(() => {
    session_token
      ? set_initial_login_state(true) : set_initial_login_state(false)
    const getLoginState = () => {
      const headers = {
        mode: 'cors',
        'Content-Type': 'application/json',
        'authorization': `Bearer ${sessionStorage.getItem('token')}`

      }
      //do something when we click
      // "proxy":"https://node-rest-six.vercel.app/",
      fetch(`${resolve}/velocity_knight_trainer/data`, { headers })
        .then(async res => await res.json())
        .then(data => {
          if (data.message) {
            set_initial_login_state(true)
            setLoginData(data.authorizedData.user)
          } else
            set_initial_login_state(false)
        })
        .catch(e => console.log(e))
    };

    return () => {
      session_token == null ? console.log('No Session Available') :
        getLoginState()

    };

  }, [])
  const [login_state, loginState] = useState(initial_login_state)
  function handleLoginState() {
    // Here, we invoke the callback with the new value
    loginState(!login_state)
    set_initial_login_state(!initial_login_state)

  }

  return (

    <>

      <div className="main">
        {/* <button className='login-state b-none  pos-abs'
        onClick={() => initial_login_state ?
          display_handler.displayFlex('profile-form-cont') :
          display_handler.displayFlex('login-form-cont')}>
        {initial_login_state ? logged_in_icon : logged_out_icon}
      </button> */}
        {/* <nav className='nav-cont center-content fill d-flex'>
        <div className='nav d-flex text-center   m-auto-hor'>
          <Link to="/newsession" className='main_nav_link d-flex radius-circle center-content'>
            CREATE SESSION
          </Link>
          <Link to="/sessioncollection" className='main_nav_link radius-circle d-flex center-content'>
            SESSIONS LOG
          </Link>
          <Link to="/profile" className='main_nav_link d-flex radius-circle center-content'>
            PROFILE
          </Link>
        </div>
      </nav > */}


        {/* Nav Via Langing */}
        {/* {document.location.pathname == '/' ? */}
        <LandingNavBar />
        {/* : true} */}
        <div className='home body-cont fill'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/app/about" element={<About />} />
            <Route path="/app/more" element={<More />} />
            <Route path="/new/session" element={<CreateSession />} />
            <Route path="/sessions/collection" element={<SessionLog />} />
            <Route path="/athlete/profile" element={<AthleteProfile />} />
            <Route path="/app/auth/user/register" element={<Register />} />
            <Route path="/app/auth/user/login" element={<Login />} onChange={handleLoginState}
              value={initial_login_state ? login_data : ""} />
            <Route path="/app/auth/user/profile" element={<AthleteProfile />} />
          </Routes>
        </div>
        <Footer />
      </div>

    </>
  );
}

export default App;
