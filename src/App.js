import './App.css';
import { useMemo, useState, useEffect } from 'react';
import { displayHandler } from './functions/ConstFunctions';
import { logged_in_icon, logged_out_icon } from './functions/ConstIcons';
import { resolve } from './functions/ConstVars';
import { Route, Routes } from "react-router-dom"
import { About, AthleteProfile, CreateSession, Footer, Home, LandingNavBar, Login, Register, SessionLog } from './functions/RoutesProvider';
import More from './templates/info/More';
import { useQuery } from '@apollo/client';
import './styles/Layout.css'


import navigationBar from './templates/partials/navigationBar';
import Programs from './templates/routes/Programs';

// const display_handler = new displayHandler()
function App() {
  // const { data, loading, error } = useLazyQuery(getPrograms, { variables: { key: 1 } });

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
      // if (data) {
      //   console.log(data)
      // }
      //do something when we click
      // "proxy": "https://node-rest-six.vercel.app/",
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
  // if (loading) return 'Loading...';
  // if (error) return `Error! ${error.message}`;

  return (
    <main>
      <div class="bg-text pos-abs">
        Faster Further Higher
      </div>
      <div className='main-header  w-100 pos-rel'>
        <p className='d-flex h-100'>
          Velocity Knight Trainer
        </p>
      </div>
      <div className='body d-flex h-100 w-100'>
        {navigationBar()}
        <div class="content d-flex w-100 ">
          <Routes>
            <Route path="/" element={<Programs />} />
            <Route path="/app/about" element={<About />} />
            <Route path="/app/more" element={<More />} />
            <Route path="/new/session" element={<CreateSession />} />
            <Route path="/sessions/collection" element={<SessionLog />} />
            <Route path="/athlete/profile" element={<AthleteProfile />} />
            <Route path="/app/auth/user/register" element={<Register />} />
            <Route path="/app/auth/user/login" element={<Login />} onChange={handleLoginState}
              value={initial_login_state ? login_data : ""} />
            <Route path="/app/auth/user/profile" element={<AthleteProfile />} />
            <Route path="/user/programs" element={<AthleteProfile />} />
          </Routes>

        </div>
      </div>
    </main>

    // <main className="flex min-h-screen flex-col items-center bg-black justify-between items-center p-2
    // bg-gradient-to-bl from-stone-800 via-blue-1000 to-black-900 min-h-dvh">
    //   <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
    //     <p
    //       className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300  text-white-100
    //     bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800 text-2xl text-bold
    //     dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-600/30 text-gray-200"
    //     >
    //       Velocity Knight Trainer
    //     </p>
    //     <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white 
    //     via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
    //       <a
    //         className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 "
    //         href="https://www.google.com/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         By <p className="text-xl">{" WestDynamics"}</p>
    //         {/* <Image
    //           src="/vercel.svg"
    //           alt="Vercel Logo"
    //           className="dark:invert"
    //           width={100}
    //           height={24}
    //           priority
    //         /> */}
    //       </a>
    //     </div>
    //   </div>

    //   <div className="flex flex-wrap container">
    //     {all_programs?.map((program, index) =>
    //     (
    //       <div className="">
    //         {ProgramCards(program)}
    //       </div>
    //     ))}
    //   </div>

    //   <div
    //     className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full 
    //   before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent
    //   before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3
    //   after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br
    //    before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff]
    //    after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]"
    //   >
    //     {/* <Image
    //       className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
    //       src="/next.svg"
    //       alt="Next.js Logo"
    //       width={180}
    //       height={37}
    //       priority
    //     /> */}
    //   </div>
    // </main>





























    // <>
  );
  // <div className="main">
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


  {/* Nav Via Langing */ }
  {/* {document.location.pathname == '/' ? */ }
  // <LandingNavBar />
  {/* : true} */ }
  {/* <div className='home body-cont fill'>
         
        </div>
        <Footer />
      </div> */}

  {/* </> */ }
  // );
}

export default App;
