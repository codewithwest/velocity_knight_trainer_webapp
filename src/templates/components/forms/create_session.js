import { useEffect, useState } from "react";
import "../../../styles/constants.css";
import "../../../styles/components/create_session.css";
import { useParams } from "react-router-dom";
import AddBoxOutlined from "@mui/icons-material/AddBoxOutlined";

export function CreateSession() {

  const { id } = useParams();

  const [formdata, setFormData] = useState();
  const [exercise_count, addExercise] = useState(1);
  const [session_type, chosenSessionType] = useState(true);

  const handleChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };

  const addExerciseTot = (e) => {
    e.preventDefault()
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
      <select id={_id} onChange={handleChange}>
        {Array.from(Array(_length)).map((c, index) => {
          return <option value={index}>{index}</option>;
        })}
      </select>
    );
  }

  const [int_value, setIntValue] = useState({
    sets: "",
    reps: ""
  });

  return (
    <div className="create-session w-100 h-100">
      <form action="form-cont">
        <div className="input-cont">
          <input type="text" className="input-area" id="session_name" placeholder="" />
          <label for="session_name">session name</label>
        </div>
        {Array.from(Array(exercise_count)).map((c, index) => {
          return (
            <div className="group-inputs w-100" id={c}>
              <div className="input-cont w-100">
                <input type="text" className="input-area"
                  id={"exercise"+c} placeholder="" />
                <label for="exercise">exercises</label>
              </div>
              <div className="input-cont">
                <input type="number" className="input-area  input-numbers"
                  id="reps" placeholder="" />
                <label for="reps" >Reps</label>
              </div>
              <div className="input-cont">
                <input type="number" className="input-area   input-numbers"
                  id="reps" placeholder="" />
                <label for="reps">Sets</label>
              </div>
              <div className="input-cont">
                <input type="number" className="input-area   input-numbers"
                  id="rest" placeholder="" />
                <label for="rest">Rest</label>
              </div>
            </div>
          )
        })}
        <div className="add_exercise d-flex">
          <button classNameName="d-flex w-100"
            onClick={addExerciseTot}>
            <AddBoxOutlined>
            </AddBoxOutlined> Add Exercise
            
          </button>
        </div>
        <div className="input-cont  w-100">
          <textarea className="input-area" id="instructions" placeholder=""></textarea>
          <label for="instructions">Session instructions</label>
        </div>
      </form>
    </div>
  );
}



  // <h2
  //       classNameName="create-new-session-header  
  //            m-auto-hor d-flex center-content "
  //     >
  //       CREATE NEW SESSION
  //     </h2>
  //     <form classNameName="create-session-form flex-col m-auto-hor">
  //       <div classNameName="session_name_cont d-flex wrap">
  //         <label
  //           htmlFor="session_name"
  //           classNameName="fw-bold d-flex center-content"
  //         >
  //           Session Name
  //         </label>
  //         <input
  //           onChange={handleChange}
  //           defaultValue={typeof "" === "object" ? "" : ""}
  //           name="session_name"
  //           type="text"
  //         />
  //       </div>
  //       {/* Exercise Cont */}
  //       <div classNameName="exercise_cover flex-col">
  //         <div classNameName="session_exercise_cont j-sb">
  //           <div classNameName="session_type d-flex wrap">
  //             <label
  //               htmlFor="session_type"
  //               classNameName="fw-bold d-flex center-content"
  //             >
  //               Session Mode
  //             </label>
  //             {/* <input onChange={chosenSession}
  //                               name="session_type" type='checkbox' /> */}
  //             <select onChange={chosenSession} required>
  //               <option> </option>
  //               <option value="track">Track</option>
  //               <option value="skipping">Skipping</option>
  //               <option value="swimming">Swimming</option>
  //               <option value="gym">Gym</option>
  //             </select>
  //             <input
  //               value={session_type}
  //               onChange={handleChange}
  //               name="session_type"
  //               hidden
  //               type="text"
  //             />
  //           </div>
  //           <div classNameName="add_exercise  m-auto-vert">
  //             <a href="/" classNameName="d-flex" onClick={addExerciseTot}>
  //               {add_icon}
  //             </a>
  //           </div>
  //         </div>
  //         {Array.from(Array(exercise_count)).map((c, index) => {
  //           return (
  //             <div classNameName="exercise_cont_bg">
  //               <div
  //                 key={c}
  //                 classNameName="exercise_cont fill 
  //                           d-flex wrap"
  //               >
  //                 <label
  //                   htmlFor="exercise_name"
  //                   classNameName="exercise_index fw-bold d-flex center-content"
  //                 >
  //                   Exercise #{index + 1}
  //                 </label>
  //                 <div classNameName="exercise_name_cont flex-col j-sb">
  //                   <h4 classNameName="w-100 d-flex center-content">
  //                     Exercise Name
  //                   </h4>
  //                   <input
  //                     classNameName="exercise_name_input"
  //                     onChange={handleChange}
  //                     defaultValue={typeof "" === "object" ? "" : ""}
  //                     name={"exercise_name" + index}
  //                     type="text"
  //                   />
  //                 </div>
  //                 <div classNameName="number_reps_cont flex-col j-sb">
  //                   <h4 classNameName="w-100 d-flex center-content">#Reps</h4>
  //                   {selector(`reps${index}`, 50)}
  //                 </div>
  //                 <div classNameName="number_sets_cont flex-col j-sa">
  //                   <h4 classNameName="d-flex w-100 center-content">#Sets</h4>
  //                   {selector(`sets${index}`, 50)}
  //                 </div>
  //                 <div classNameName="total_rest_cont flex-col sb">
  //                   <h4 classNameName="d-flex w-100  center-content">Rest</h4>
  //                   <input
  //                     onChange={handleChange}
  //                     name={"rest" + index}
  //                     classNameName="duration"
  //                     type="text"
  //                   />
  //                 </div>
  //                 {session_type === "track" ? (
  //                   <div classNameName="intervals_cont flex-col sb">
  //                     <h4 classNameName="d-flex w-100 center-content">Interval</h4>
  //                     <input
  //                       onChange={handleChange}
  //                       name={"intervals" + index}
  //                       classNameName="duration"
  //                       type="text"
  //                     />
  //                   </div>
  //                 ) : (
  //                   true
  //                 )}
  //                 {session_type === "track" ? (
  //                   <div classNameName="intensity_cont flex-col sb">
  //                     <h4 classNameName="d-flex w-100 center-content">Intensity</h4>
  //                     <input
  //                       classNameName="intensity"
  //                       name={"intensity" + index}
  //                       type="text"
  //                     />
  //                   </div>
  //                 ) : (
  //                   true
  //                 )}
  //               </div>
  //             </div>
  //           );
  //         })}
  //       </div>
  //       {/* Log Button */}
  //       <div classNameName="instructions_cont flex-col sb">
  //         <h4 classNameName="d-flex w-100 center-content">
  //           Addintinal Instructions
  //         </h4>
  //         <textarea
  //           classNameName="instructions"
  //           maxLength={100}
  //           rows={10}
  //           cols={10}
  //           name={"instructions"}
  //           type="text"
  //         />
  //       </div>
  //       <button onClick={handleSessionLog} classNameName="log_button b-none ">
  //         Log Session
  //       </button>
  //     </form>
