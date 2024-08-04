import { useEffect, useMemo, useState } from "react";
import "../../../styles/constants.css";
import "../../../styles/components/create_program.css";
import "../../../styles/components/view_program.css";
import { useNavigate } from "react-router-dom";
import { create_program_data } from "../../../providers/data_schema/schemas";
import { collect_exercises } from "../../../providers/helpers/helper";
import { useMutation } from "@apollo/client";
import { create_program } from "../../../providers/data_schema/graphql/program";
import Loader from "../loader";
import { CreateUpdateForm } from "./create_update_form";

export function CreateProgram() {
  const navigate = useNavigate()


  const [formdata, setFormData] = useState(create_program_data);
  const [exercise_data, setExerciseData] = useState({})
  const [exercise_count, addExercise] = useState(1);

  const [_create_program_mutation, {
    loading,
    data,
    error }] = useMutation(create_program, {
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
    _create_program_mutation()
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
      navigate('/programs/' + parseInt(create_program_response?.id))
    }

  }, [exercise_count, create_program_response, navigate]);

  return (
    <div className="create-program w-100 h-100">

      {
        loading ? <Loader /> :
          CreateUpdateForm(formdata, handleChange,
            handleExerciseChange, addExerciseTot,
            createprogram, Array.from(Array(exercise_count)), "new")
      }
    </div >
  );
}

