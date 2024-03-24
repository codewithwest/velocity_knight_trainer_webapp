import { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/Const.css";
import "../../styles/appRoutes/CreateSession.css";
import { add_icon } from "../../functions/ConstIcons";

export function CreateSession() {
  const [formdata, setFormData] = useState();
  const [exercise_count, addExercise] = useState(1);
  const [session_type, chosenSessionType] = useState(true);

  const handleChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };

  const addExerciseTot = (e) => {
    addExercise(exercise_count + 1);
  };
  const chosenSession = (e) => {
    chosenSessionType(e.target.value);
  };

  const handleSessionLog = (e) => {
    e.preventDefault();
    console.log(formdata);
  };

  function selector(_id, _length) {
    return (
      <select name={_id} onChange={handleChange}>
        {Array.from(Array(_length)).map((c, index) => {
          return <option value={index}>{index}</option>;
        })}
      </select>
    );
  }
  return (
    <>
      <h2
        className="create-new-session-header  
             m-auto-hor d-flex center-content "
      >
        CREATE NEW SESSION
      </h2>
      <form className="create-session-form flex-col m-auto-hor">
        <div className="session_name_cont d-flex wrap">
          <label
            htmlFor="session_name"
            className="fw-bold d-flex center-content"
          >
            Session Name
          </label>
          <input
            onChange={handleChange}
            defaultValue={typeof "" === "object" ? "" : ""}
            name="session_name"
            type="text"
          />
        </div>
        {/* Exercise Cont */}
        <div className="exercise_cover flex-col">
          <div className="session_exercise_cont j-sb">
            <div className="session_type d-flex wrap">
              <label
                htmlFor="session_type"
                className="fw-bold d-flex center-content"
              >
                Session Mode
              </label>
              {/* <input onChange={chosenSession}
                                name="session_type" type='checkbox' /> */}
              <select onChange={chosenSession} required>
                <option> </option>
                <option value="track">Track</option>
                <option value="skipping">Skipping</option>
                <option value="swimming">Swimming</option>
                <option value="gym">Gym</option>
              </select>
              <input
                value={session_type}
                onChange={handleChange}
                name="session_type"
                hidden
                type="text"
              />
            </div>
            <div className="add_exercise  m-auto-vert">
              <a className="d-flex" onClick={addExerciseTot}>
                {add_icon}
              </a>
            </div>
          </div>
          {Array.from(Array(exercise_count)).map((c, index) => {
            return (
              <div className="exercise_cont_bg">
                <div
                  key={c}
                  className="exercise_cont fill 
                            d-flex wrap"
                >
                  <label
                    htmlFor="exercise_name"
                    className="exercise_index fw-bold d-flex center-content"
                  >
                    Exercise #{index + 1}
                  </label>
                  <div className="exercise_name_cont flex-col j-sb">
                    <h4 className="w-100 d-flex center-content">
                      Exercise Name
                    </h4>
                    <input
                      className="exercise_name_input"
                      onChange={handleChange}
                      defaultValue={typeof "" === "object" ? "" : ""}
                      name={"exercise_name" + index}
                      type="text"
                    />
                  </div>
                  <div className="number_reps_cont flex-col j-sb">
                    <h4 className="w-100 d-flex center-content">#Reps</h4>
                    {selector(`reps${index}`, 50)}
                  </div>
                  <div className="number_sets_cont flex-col j-sa">
                    <h4 className="d-flex w-100 center-content">#Sets</h4>
                    {selector(`sets${index}`, 50)}
                  </div>
                  <div className="total_rest_cont flex-col sb">
                    <h4 className="d-flex w-100  center-content">Rest</h4>
                    <input
                      onChange={handleChange}
                      name={"rest" + index}
                      className="duration"
                      type="text"
                    />
                  </div>
                  {session_type == "track" ? (
                    <div className="intervals_cont flex-col sb">
                      <h4 className="d-flex w-100 center-content">Interval</h4>
                      <input
                        onChange={handleChange}
                        name={"intervals" + index}
                        className="duration"
                        type="text"
                      />
                    </div>
                  ) : (
                    true
                  )}
                  {session_type == "track" ? (
                    <div className="intensity_cont flex-col sb">
                      <h4 className="d-flex w-100 center-content">Intensity</h4>
                      <input
                        className="intensity"
                        name={"intensity" + index}
                        type="text"
                      />
                    </div>
                  ) : (
                    true
                  )}
                </div>
              </div>
            );
          })}
        </div>
        {/* Log Button */}
        <div className="instructions_cont flex-col sb">
          <h4 className="d-flex w-100 center-content">
            Addintinal Instructions
          </h4>
          <textarea
            className="instructions"
            maxLength={100}
            rows={10}
            cols={10}
            name={"instructions"}
            type="text"
          />
        </div>
        <button onClick={handleSessionLog} className="log_button b-none ">
          Log Session
        </button>
      </form>
    </>
  );
}
