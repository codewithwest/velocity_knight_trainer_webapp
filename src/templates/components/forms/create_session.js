import { useEffect, useState } from "react";
import "../../../styles/constants.css";
import "../../../styles/components/create_session.css";
import { useParams } from "react-router-dom";
import AddBoxOutlined from "@mui/icons-material/AddBoxOutlined";
import { create_session_data, create_session_exercise } from "../../../providers/data_schema/schemas";
import { collect_exercises } from "../../../providers/helpers/helper";

export function CreateSession() {
  // const { id } = useParams();

  const [formdata, setFormData] = useState(create_session_data);
  const [exercise_data, setExerciseData] = useState({})
  const [exercise_count, addExercise] = useState(1);
  // const [session_type, chosenSessionType] = useState(true);

  const handleChange = (e) => {
    setFormData({ ...formdata, [e.target.id]: e.target.value });
  };

  const handleExerciseChange = (e) => {
    let new_exercise_data = collect_exercises(e, exercise_data)

    setExerciseData({ ...new_exercise_data });
    console.error(exercise_data)
  };

  // node --trace-deprecation
  const createSession = () => {
    formdata.exercises = []
    let exercise_list = []
    for (var key in exercise_data) {
      var value = exercise_data[key];
      exercise_list.push(value)
    }
    formdata.exercises = exercise_list
    setFormData(formdata)
    // register()
  }

  const addExerciseTot = (e) => {
    e.preventDefault()
    addExercise(exercise_count + 1);
  };

  return (
    <div className="create-session w-100 h-100">
      <form action="form-cont">
        <div className="input-cont">
          <input type="text" className="input-area" id="name"
            onChange={handleChange}
            placeholder="" />
          <label htmlFor="name">session name</label>
        </div>
        {Array.from(Array(exercise_count)).map((c, index) => {
          return (

            <div className="group-inputs w-100" id={index} key={index} >
              <br />
              <div className="input-cont w-100">
                <input type="text" className="input-area"
                  id={"exercise"} placeholder="" onChange={handleExerciseChange} />
                <label htmlFor="exercise"
                >exercises
                </label>
              </div>
              <div className="input-cont">
                <input type="number" className="input-area  input-numbers"
                  id="reps" placeholder="" onChange={handleExerciseChange} />
                <label htmlFor="reps" >Reps</label>
              </div>
              <div className="input-cont">
                <input type="number" className="input-area   input-numbers"
                  id="sets" placeholder="" onChange={handleExerciseChange} />
                <label htmlFor="sets">Sets</label>
              </div>
              <div className="input-cont">
                <input type="text" className="input-area   input-numbers"
                  id="rest" placeholder="" onChange={handleExerciseChange} />
                <label htmlFor="rest" >Rest</label>
              </div>
            </div>
          )
        })}
        <div className="add_exercise d-flex">
          <button className="d-flex w-100"
            onClick={addExerciseTot}>
            <AddBoxOutlined>
            </AddBoxOutlined>
            Add Exercise
          </button>
        </div>
        <div className="input-cont  w-100">
          <textarea className="input-area" id="instructions" placeholder=""></textarea>
          <label htmlFor="instructions">Session instructions</label>
        </div>
        <button className="submit  d-flex" id="submit"
          onClick={(e) => {
            e.preventDefault()
            createSession()
          }
          }>
          <AddBoxOutlined>
          </AddBoxOutlined>
          Create Session
        </button>
      </form >
    </div >
  );
}