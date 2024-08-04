import { useEffect, useMemo, useState } from "react";
import "../../../styles/constants.css";
import "../../../styles/components/create_program.css";
import "../../../styles/components/view_program.css";
import { useNavigate, useParams } from "react-router-dom";
import { create_program_data } from "../../../providers/data_schema/schemas";
import { collect_exercises } from "../../../providers/helpers/helper";
import { useMutation, useQuery } from "@apollo/client";
import { get_programs, update_program } from "../../../providers/data_schema/graphql/program";
import Loader from "../loader";
import { NavigateBefore } from "@mui/icons-material";
import { CreateUpdateForm } from "./create_update_form";

export function UpdateProgram() {
    const navigate = useNavigate()

    const { id } = useParams();

    const [formdata, setFormData] = useState(create_program_data);
    const [updated_form_data, setUpdatedFormData] = useState({});
    const [_program_data, setProgramData] = useState()
    const [mapping_exercises, setMappingData] = useState()

    const program_data = useQuery(get_programs, {
        variables: {
            input: {
                keys: parseInt(localStorage.getItem("id")),
                id: parseInt(id)
            }
        },
        fetchPolicy: "cache-and-network",
        nextFetchPolicy: "cache-first",
    });

    const [_update_program_mutation, {
        loading,
        data,
        error }] = useMutation(update_program, {
            variables: { input: updated_form_data }
        })

    const handleChange = (e) => {
        setFormData({ ...formdata, [e.target.id]: e.target.value });
    };

    const handleExerciseChange = (e) => {
        let new_exercise_data = collect_exercises(e, {})
    };

    const updateprogram = (e) => {
        let _form_children = e.target.parentNode.children
        // Get main elements
        var main_fields_obj = {}
        var exercise_obj = {}
        var exercises_list = []
        Array.from(_form_children)?.map(main_fields => {
            if (main_fields.children[0]?.id) {
                main_fields_obj[main_fields.children[0]?.id.toString()] = main_fields.children[0].value
            } else {
                exercise_obj = {}
                Array.from(main_fields.children)?.map(exercises => {
                    Array.from(exercises.children)?.map((exercise, index) => {
                        if (exercise.tagName?.toLowerCase() === "label") return true
                        if (exercise?.id.toLowerCase() === "sets" || exercise?.id.toLowerCase() === "reps")
                            exercise_obj[exercise?.id.toString()] = exercise?.value === "" ? 0 : parseInt(exercise?.value)
                        else if (exercise?.id.toLowerCase() === "reps") exercise_obj[exercise?.id] = exercise?.value === "" ? 0 : parseInt(exercise?.value)
                        else exercise_obj[exercise?.id] = exercise?.value
                        return true
                    })
                    if (!Object.values(exercise_obj).includes(undefined)) {
                        exercises_list.push(exercise_obj)
                    }
                    return true
                })
            }
            return [main_fields_obj, exercise_obj, exercises_list]
        });

        function getUniqueListBy(arr, key) {
            return [...new Map(arr.map(item => [item[key], item])).values()]
        }
        main_fields_obj['exercises'] = getUniqueListBy(exercises_list, "exercise")
        main_fields_obj['id'] = parseInt(id)
        main_fields_obj['keys'] = [parseInt(localStorage?.id)]

        setUpdatedFormData({ ...main_fields_obj })

        console.error(updated_form_data)
        _update_program_mutation()
    }

    const addExerciseTot = (e) => {
        e.preventDefault()
        setMappingData([...mapping_exercises, {}]);
    };

    let update_program_response = useMemo(() => {
        if (loading) return [" "]
        else if (data) return data?.updateProgram
        else return error
    }, [loading, data, error]);

    useEffect(() => {

        if (update_program_response?.id) {
            navigate('/programs/' + parseInt(update_program_response?.id))
        }
        if (program_data?.data?.getPrograms[0]) {
            setMappingData(_program_data?.exercises)
            setProgramData(program_data?.data?.getPrograms[0])
        }

    }, [update_program_response, _program_data,
        program_data, updated_form_data]);

    return (
        <div className="create-program w-100 h-100">
            <button className="edit-back-form d-flex" id="submit"
                onClick={(e) => {
                    e.preventDefault()
                    navigate(-1)
                }
                }>
                <NavigateBefore></NavigateBefore>
                <NavigateBefore></NavigateBefore>
            </button>

            {
                program_data.loading ? <Loader /> :
                    CreateUpdateForm(_program_data, handleChange,
                        handleExerciseChange, addExerciseTot,
                        updateprogram, mapping_exercises ?? [], true)
            }
        </div >
    );
}

