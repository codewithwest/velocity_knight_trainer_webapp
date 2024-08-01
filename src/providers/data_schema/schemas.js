
const initial_registration_form_data = {
    username: "",
    email: "",
    password: "",
    con_password: "",
}
const initial_login_form_data = {
    email: "",
    password: "",
}

// create sesison schema
const create_session_data = {
    name: "",
    exercises: [],
    instructions: "",
}

const create_session_exercise = {
    exercise: "",
    reps: 1,
    sets: 1,
    rest: "",
}

export {
    initial_registration_form_data,
    initial_login_form_data,
    create_session_data,
    create_session_exercise
}