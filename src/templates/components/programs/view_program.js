import { useEffect, useState } from "react";
import "../../../styles/constants.css";
import "../../../styles/components/create_program.css";
import "../../../styles/components/view_program.css";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { get_programs } from "../../../providers/data_schema/graphql/program";
import Loader from "../loader";
import { Edit } from "@mui/icons-material";

export function ViewProgram() {

    const { id } = useParams();

    const [_program_data, setProgramData] = useState()
    // Get program id not edit
    const { loading, data, error } = useQuery(get_programs, {
        variables: {
            input: {
                keys: parseInt(localStorage.getItem("id")),
                id: parseInt(id)
            }
        },
        fetchPolicy: "cache-and-network",
        nextFetchPolicy: "cache-first",
    });

    useEffect(() => {
        if (data?.getPrograms[0]) {
            localStorage.updateProgram = JSON.stringify(data?.getPrograms[0])
            setProgramData(JSON.parse(localStorage?.updateProgram))
        }

    }, [data]);

    return (

        <>
            <Link className="edit-form d-flex"
                id="submit" to={`/program/${id}/edit`}>
                <Edit></Edit>
            </Link >
            <div className="view-program w-100 h-100">
                {loading ? <Loader /> :
                    <div action="view-cont">
                        <div className="view-cont">
                            <div className="view-area" id="name">
                                {_program_data?.name ?? "..."}</div>
                            <label htmlFor="name">Program name</label>
                        </div>
                        {
                            _program_data?.exercises?.map((field, index) => {
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
                                {_program_data?.instructions ?? " "}
                            </div>
                            <label htmlFor="instructions">program instructions</label>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}
