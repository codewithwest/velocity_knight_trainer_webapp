import { useEffect, useMemo, useState } from "react";
import "../../../styles/constants.css";
import "../../../styles/components/create_program.css";
import "../../../styles/components/view_program.css";
import { useLocation, useParams } from "react-router-dom";
import AddBoxOutlined from "@mui/icons-material/AddBoxOutlined";
import { create_program_data } from "../../../providers/data_schema/schemas";
import { collect_exercises, input_error_highlight } from "../../../providers/helpers/helper";
import { useMutation, useQuery } from "@apollo/client";
import { create_program, get_programs } from "../../../providers/data_schema/graphql/program";
import Loader from "../loader";
import ViewProgram from "./view_program";
import { Edit } from "@mui/icons-material";
import { CreateUpdateProgram } from "./create_update_program";

export function CreateProgram() {
  const location = useLocation();
  const { id } = useParams();
  const [edit, setEdit] = useState(false)

  const [formdata, setFormData] = useState(create_program_data);
  const [exercise_data, setExerciseData] = useState({})
  const [exercise_count, addExercise] = useState(1);
  const [_program_data, setProgramData] = useState()
  const [mapping_exercises, setMappingData] = useState()

  // Get program id not edit
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
    if (formdata.exercises.length === 0 || formdata.name) {
      input_error_highlight('input-cont')
    }
  }

  const addExerciseTot = (e) => {
    e.preventDefault()
    addExercise(exercise_count + 1);
  };

  let create_program_response = useMemo(() => {
    if (loading) return [" "]
    else if (data) {
      localStorage.updateProgram = data?.createProgram[0]
      setEdit(false)
      // if (localStorage.updateProgram)
      //   localStorage.removeItem('updateProgram')
      return data?.createProgram
    }
    else return error
  }, [loading, data, error]);

  useEffect(() => {
    if (create_program_response?.id) {
      setFormData(create_program_response)
      console.error(create_program_response?.message)
      // setTimeout(() => navigate('/'), 5)
    }

    if (program_data && program_data?.data?.getPrograms[0]) {
      localStorage.updateProgram = JSON.stringify(program_data?.data?.getPrograms[0])
      setProgramData(JSON.parse(localStorage?.updateProgram))
      setMappingData(_program_data?.exercises)
    }


    if (location.pathname === "/programs/new" && id === null || id === undefined) {
      setEdit("new")
      localStorage.removeItem('updateProgram')
      setMappingData(Array.from(Array(exercise_count)))
    }

    console.log(mapping_exercises)
  }, [create_program_response, program_data, mapping_exercises]);

  return (
    <div className="create-program w-100 h-100">
      {edit === true || edit === "new" ? "" :
        <button className="edit-form d-flex" id="submit"
          onClick={(e) => {
            e.preventDefault()
            setEdit(true)
            setProgramData(_program_data)
          }
          }>
          <Edit></Edit>
        </button>
      }
      {
        loading ? <Loader />
          : edit === true || edit === "new" ?

            CreateUpdateProgram(_program_data, handleChange,
              handleExerciseChange, addExerciseTot,
              createprogram, mapping_exercises, edit)
            :
            (<>
              {program_data.loading ? <Loader /> :
                _program_data?.name ? ViewProgram(_program_data) :
                  <div className="m-auto">Please Try Refresh!</div>}
            </>)
      }
    </div >
  );
}

