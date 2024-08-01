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


export { collect_exercises }