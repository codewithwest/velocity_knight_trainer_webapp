import { useEffect, useMemo, useState } from "react";
import "../../../styles/constants.css";
import "../../../styles/components/create_program.css";
import "../../../styles/components/view_program.css";
import { useParams } from "react-router-dom";
import AddBoxOutlined from "@mui/icons-material/AddBoxOutlined";
import { create_program_data } from "../../../providers/data_schema/schemas";
import { collect_exercises, input_error_highlight } from "../../../providers/helpers/helper";
import { useMutation } from "@apollo/client";
import { create_program } from "../../../providers/data_schema/graphql/program";
import Loader from "../loader";

export function CreateProgram() {
  // const { id } = useParams();
  const [edit, setEdit] = useState(false)

  const [formdata, setFormData] = useState(create_program_data);
  const [exercise_data, setExerciseData] = useState({})
  const [exercise_count, addExercise] = useState(1);
  const [_create_program, { loading, data, error }] = useMutation(create_program, {
    variables: { input: formdata }
  })

  const handleChange = (e) => {
    setFormData({ ...formdata, [e.target.id]: e.target.value });
  };

  const handleExerciseChange = (e) => {
    let new_exercise_data = collect_exercises(e, exercise_data)

    setExerciseData({ ...new_exercise_data });
  };

  // node --trace-deprecation
  const createprogram = () => {
    formdata.exercises = []
    let exercise_list = []
    for (var key in exercise_data) {
      var value = exercise_data[key];
      exercise_list.push(value)
    }
    formdata.exercises = exercise_list
    formdata.keys = [parseInt(localStorage.getItem('id'))]
    setFormData(formdata)
    _create_program()
    if (formdata.exercises.length == 0 || formdata.name) {
      input_error_highlight('input-cont')
    }
  }

  const addExerciseTot = (e) => {
    e.preventDefault()
    addExercise(exercise_count + 1);
  };

  let create_program_response = useMemo(() => {
    if (loading) return [" "]
    else if (data) return data?.createProgram
    else return error
  }, [loading, data, error]);

  useEffect(() => {
    if (create_program_response?.id) {
      setFormData(create_program_response)
      console.error(create_program_response?.message)
      // setTimeout(() => navigate('/'), 5)
    }
  }, [create_program_response])

  return (

    <div className="create-program w-100 h-100">
      {loading ? <Loader />
        : edit ? (
          <form action="form-cont">
            <div className="input-cont">
              <input type="text" className="input-area" id="name"
                onChange={handleChange}
                placeholder="" />
              <label htmlFor="name">program name</label>
            </div>
            {Array.from(Array(exercise_count)).map((c, index) => {
              return (
                <div className="group-inputs w-100" id={index} key={index} >
                  <br />
                  <div className="input-cont w-100">
                    <input type="text" className="input-area"
                      id={"exercise"} placeholder="" onChange={handleExerciseChange} required />
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
              <label htmlFor="instructions">program instructions</label>
            </div>
            <button className="submit  d-flex" id="submit"
              onClick={(e) => {
                e.preventDefault()
                createprogram()
              }
              }>
              {/* <AddBoxOutlined>
          </AddBoxOutlined> */}
              Create program
            </button>
          </form >
        ) :
          (
            <div action="form-cont">
              <div className="view-cont">
                <div type="text" className="view-area" id="name"
                  onChange={handleChange}
                  placeholder="" />
                <label htmlFor="name">Program name</label>
              </div>
              {Array.from(Array(exercise_count)).map((c, index) => {
                return (
                  <div className="group-inputs w-100" id={index} key={index} >
                    <br />
                    <div className="view-cont w-100">
                      <div className="view-area"
                        id="exercise"></div>
                      <label htmlFor="exercise"
                      >exercises
                      </label>
                    </div>
                    <div className="view-cont">
                      <div className="view-area view-numbers"
                        id="reps" />
                      <label htmlFor="reps">Reps</label>
                    </div>
                    <div className="view-cont">
                      <div className="view-area view-numbers"
                        id="sets" ></div>
                      <label htmlFor="sets">Sets</label>
                    </div>
                    <div className="view-cont">
                      <div className="view-area view-numbers"
                        id="rest" ></div>
                      <label htmlFor="rest" >Rest</label>
                    </div>
                  </div>
                )
              })}
              <div className="view-cont  w-100">
                <div className="view-area" id="instructions"
                ></div>
                <label htmlFor="instructions">program instructions</label>
              </div>
            </div>
          )
      }
    </div >
  );
}