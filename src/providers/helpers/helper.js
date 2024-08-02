const collect_exercises = (e, exercise_data) => {
    let object_target = e.target.parentNode.parentNode.id
    let target_id = e.target.id
    let target_value = e.target.value
    let exercise_data_object = exercise_data[object_target]

    exercise_data[object_target] = {
        ...exercise_data_object, [target_id]: target_value
    }

    return exercise_data
}

const input_error_highlight = (error_selector) => {
    let _inputs = document.querySelectorAll(`.${error_selector}`);
    _inputs.forEach(
        (el) =>
        (el.style.boxShadow =
            "1.5px 1.5px 1px rgba(220,22,11,.6),-1.5px -1.5px 1px rgba(220,22,11,.6)")
    )
}

export { collect_exercises, input_error_highlight }