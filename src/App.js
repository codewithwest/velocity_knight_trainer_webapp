import './App.css';
import { useState, useEffect, Suspense } from 'react';
import { Route, Routes, useNavigate } from "react-router-dom"
import {
  About, AthleteProfile, CreateProgram,
  Login, Programs, Register, UpdateProgram,
  ViewProgram
} from './providers/routes_provider';
import More from './templates/info/more';
import './styles/main.css'
import navigationBar from './templates/partials/navigation_bar';
// import ViewProgram from './templates/components/programs/view_program';

function App() {
  const navigate = useNavigate();
  // const { data, loading, error } = useLazyQuery(getPrograms, { variables: { key: 1 } });
  // const [state, setState] = React.useState(num);

  // useEffect(() => {
  //   setState(num);
  // }, [num]);

  let session_token = localStorage.getItem('token')
  const [is_logged_in, set_is_logged_in] = useState(false)
  // const [login_data, setLoginData] = useState()

  useEffect(() => {

    if (session_token) {
      set_is_logged_in(true)
    } else {
      set_is_logged_in(false)
      navigate('/login')
    }
  }, [is_logged_in, session_token])

  // const getLoginState = () => {
  //   const headers = {
  //     mode: 'cors',
  //     'Content-Type': 'application/json',
  //     'authorization': `Bearer ${sessionStorage.getItem('token')}`
  // }
  // if (data) {
  //   console.log(data)
  // }
  //do something when we click
  // "proxy": "https://node-rest-six.vercel.app/",
  //   fetch(`${resolve}/velocity_knight_trainer/data`, { headers })
  //     .then(async res => await res.json())
  //     .then(data => {
  //       if (data.message) {
  //         set_is_logged_in
  //           (true)
  //         setLoginData(data.authorizedData.user)
  //       } else
  //         set_is_logged_in
  //           (false)
  //     })
  //     .catch(e => console.log(e))
  // };

  //   return () => {
  //     session_token == null ? console.log('No Session Available') :
  //       getLoginState()

  //   };

  // }, [])
  const update_login_state = () => set_is_logged_in(!is_logged_in)
  // if (loading) return 'Loading...';
  // if (error) re  turn `Error! ${error.message}`;
  return (
    <main>
      <div className="bg-text pos-abs">
        Faster Further Higher
      </div>
      <div className='main-header  w-100 pos-rel'>
        <p className='d-flex h-100'>
          Velocity Knight Trainer
        </p>
      </div>
      <div className='body d-flex h-100 w-100'>
        {navigationBar()}
        <div className="content d-flex w-100 h-100">
          <Suspense fallback={<div className="container">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Programs />} on_logged_in={update_login_state}
                value={is_logged_in ? "login_data" : ""} />
              <Route path="/app/about" element={<About />} />
              <Route path="/settings" element={<More />} />
              {/* <Route path='/program/' */}
              <Route path="/program/new" element={<CreateProgram />} />
              <Route path="/program/:id/edit" element={<UpdateProgram />} />
              <Route path="/programs/:id" element={<ViewProgram />} />

              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} onChange={set_is_logged_in}
                value={is_logged_in
                  ? "login_data" : ""} />
              <Route path="/profile" element={<AthleteProfile />} />
              {/* <Route path="*" element={<NoMatch />} /> */}
            </Routes>
          </Suspense>
        </div>
      </div>
    </main>

  )
}
export default App;
