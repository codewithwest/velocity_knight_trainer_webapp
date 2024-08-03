


export default function ViewProgram(program) {
    return (
        // program?.map((program, index) => (
        <div action="form-cont">
            <div className="view-cont">
                <div className="view-area" id="name">
                    {program?.name ?? "..."}</div>
                <label htmlFor="name">Program name</label>
            </div>
            {
                program?.exercises?.map((field, index) => {
                    return (
                        <div className="group-inputs w-100" id={index} key={index} >
                            <div className="view-cont w-100">
                                <div className="view-area w-100"
                                    id="exercise">
                                    {field?.exercise ?? ""}
                                </div>
                                <label htmlFor="exercise">
                                    exercises
                                </label>
                            </div>
                            <div className="view-cont">
                                <div className="view-area view-numbers"
                                    id="reps"> {field?.reps ?? ""}</div>
                                <label htmlFor="reps">Reps</label>
                            </div>
                            <div className="view-cont">
                                <div className="view-area view-numbers"
                                    id="sets"> {field?.sets ?? ""}</div>
                                <label htmlFor="sets">Sets</label>
                            </div>
                            <div className="view-cont">
                                <div className="view-area view-numbers"
                                    id="rest" > {field?.rest ?? ""}</div>
                                <label htmlFor="rest" >Rest</label>
                            </div>
                        </div>
                    )
                })
            }
            <div className="view-cont  w-100">
                <div className="view-area" id="instructions">
                    {program?.instructions ?? " "}
                </div>
                <label htmlFor="instructions">program instructions</label>
            </div>
        </div >
    )
}
