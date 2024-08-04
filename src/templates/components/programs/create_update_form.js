import { AddBoxOutlined } from '../../../providers/icons'

export function CreateUpdateForm(
    _program_data, handleChange, handleExerciseChange,
    addExerciseTot, createprogram, mapping_exercises,
    edit) {

    return (
        <form id='create-update-form' >
            <div className="input-cont">
                <input type="text" className="input-area" id="name"
                    defaultValue={_program_data?.name ?? ""}
                    onChange={handleChange}
                    placeholder="" />
                <label htmlFor="name">Program name</label>
            </div>
            {
                mapping_exercises.map((exercise, index) => {
                    return (
                        <div className="group-inputs w-100" id={index} key={index} >
                            <div className="input-cont w-100">
                                <input type="text" className="input-area"
                                    id={"exercise"}
                                    defaultValue={exercise?.exercise ?? ""}
                                    placeholder="" onChange={handleExerciseChange}
                                    required />
                                <label htmlFor="exercise">Exercises</label>
                            </div>
                            <div className="input-cont">
                                <input type="number" className="input-area input-numbers"
                                    id="reps" placeholder=""
                                    defaultValue={exercise?.reps ?? ""}
                                    onChange={handleExerciseChange} />
                                <label htmlFor="reps">Reps</label>
                            </div>
                            <div className="input-cont">
                                <input type="number" className="input-area input-numbers"
                                    id="sets" placeholder=""
                                    defaultValue={exercise?.sets ?? ""}
                                    onChange={handleExerciseChange} />
                                <label htmlFor="sets">Sets</label>
                            </div>
                            <div className="input-cont">
                                <input type="text" className="input-area input-numbers"
                                    id="rest" placeholder=""
                                    defaultValue={exercise?.rest ?? ""}
                                    onChange={handleExerciseChange} />
                                <label htmlFor="rest" >Rest</label>
                            </div>
                        </div>
                    )
                })
            }
            <div className="create_program d-flex">
                <button className="d-flex w-100"
                    onClick={addExerciseTot}>
                    <AddBoxOutlined>
                    </AddBoxOutlined>
                    Add Exercise
                </button>
            </div>
            <div className="input-cont  w-100">
                <textarea className="input-area" id="instructions"
                    onChange={handleChange}
                    defaultValue={_program_data?.instructions ?? ""}
                    placeholder=""></textarea>
                <label htmlFor="instructions">program instructions</label>
            </div>
            <button className="submit  d-flex" id="submit"
                onClick={(e) => {
                    e.preventDefault()
                    createprogram(e)
                }
                }>
                {edit === "new" ? "Create" : "Update"} program
            </button>
        </form >
    )
}