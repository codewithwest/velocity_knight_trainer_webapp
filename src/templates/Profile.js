import '../styles/Const.css';
import '../styles/Forms.css';

import { useState, useEffect } from 'react';
import { initial_login_form_data } from '../dataSchema/schemas.js';
import { displayHandler, displaySwitch } from '../functions/ConstFunctions.js';
import { resolve } from '../functions/ConstVars';


export default function Profile(props) {
    const display_handler = new displayHandler()
    const display_switch = new displaySwitch();

    function handleLoginState(val) {
        props.onChange(!val);
    }
    let [first, setfirst] = useState(0)
    function IncNum(first) {
        setfirst(first + 1)
    }
    setInterval(() => IncNum(first), 1000)
    // const [auth_state, loginState] = useState(props.value)
    const [formdata, setFormData] = useState(initial_login_form_data);
    const [login_response, setLoginResponse] = useState();
    const handleChange = (e) => {
        setFormData({ ...formdata, [e.target.name]: e.target.value })
    }
    function inputErrorHighlight(error_selector) {
        let _inputs = document.querySelectorAll(`.${error_selector}`)
        _inputs.forEach(el =>
            el.style.boxShadow = "1.5px 1.5px 1px rgba(220,22,11,.6),-1.5px -1.5px 1px rgba(220,22,11,.6)")
    }
    const handleSubmit = async (_formdata) => {
        fetch(`${resolve}/velocity_knight_trainer/update/`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(_formdata)
        }).then(res => res.json())
            .then(async res => {
                await res.success ?
                    // await display_switch.displaySuccessMessage('reg-success', 'reg-form', 'reg-form-cont')
                    document.location.reload()
                    :
                    console.log(res)
            })
            .catch((err) => console.log(err))
    }

    async function loginSuccess() {
        await display_switch.displaySuccessMessage('login-success', 'login-form', 'login-form-cont')
        props.onChange()
    }
    const user_data = props.value


    return (
        // props.value ?
        <div className="profile-form-cont fill  center-content">
            <form className='profile-form flex-col'>
                <a className='profile-form-collapse center-content b-none bg-none'
                    onClick={(e) => {
                        e.preventDefault()
                        display_handler.displayNone('profile-form-cont')
                    }}>X</a>
                <div>
                    <label htmlFor="username">Username</label>
                    <input onChange={handleChange} defaultValue={typeof user_data === 'object' ? user_data.username : ''} name="username" type='text' />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input onChange={handleChange} defaultValue={typeof user_data === 'object' ? user_data.email : ''} name="email" type='text' />
                </div>
                <div>
                    <label htmlFor="full_name">Full Name</label>
                    <input onChange={handleChange} defaultValue={typeof user_data === 'object' ? user_data.fullName : ''} name="full_name" type='text' />
                </div>
                <div>
                    <button hidden disabled onClick={(e) => {
                        e.preventDefault()
                        sessionStorage.clear()
                        props.onChange()
                        document.location.reload()
                    }} className="reset-password" type='submit'>Change Password</button>
                    <button hidden onClick={(e) => {
                        e.preventDefault()
                        sessionStorage.clear()
                        props.onChange()
                        document.location.reload()
                    }} className="profile-update" type='submit'>Update Details</button>

                    <button onClick={(e) => {
                        e.preventDefault()
                        sessionStorage.clear()
                        props.onChange()
                        document.location.reload()
                        display_handler.displayNone('profile-form-cont')
                    }} className="logout-button" type='submit'>Log Out</button>

                </div>
            </form>
        </div>
        // : true
    )
}  