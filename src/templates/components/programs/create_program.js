import { useEffect, useMemo, useState } from "react";
import "../../../styles/constants.css";
import "../../../styles/components/create_program.css";
import "../../../styles/components/view_program.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { create_program_data } from "../../../providers/data_schema/schemas";
import { collect_exercises, input_error_highlight } from "../../../providers/helpers/helper";
import { useMutation, useQuery } from "@apollo/client";
import { create_program, get_programs } from "../../../providers/data_schema/graphql/program";
import Loader from "../loader";
import ViewProgram from "./view_program";
import { Edit, Label } from "@mui/icons-material";
import { CreateUpdateProgram } from "./create_update_program";

export function CreateProgram() {
  const location = useLocation();
  const { id } = useParams();
  const [edit, setEdit] = useState(false)
  const navigate = useNavigate()
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

  const [_create_program, {
    loading,
    create_program_response_data,
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
    _create_program()
    if (formdata.exercises.length === 0 || formdata.name) {
      input_error_highlight('input-cont')
    }
  }
  const updateprogram = (e) => {
    let _form_children = e.target.parentNode.children
    console.error(typeof _form_children)
    // Get main elements
    let main_fields_obj = {}
    let exercise_obj = {}
    let exercises_list = []
    Array.from(_form_children)?.map(main_fields => {
      if (main_fields.children[0]?.id) {
        main_fields_obj[main_fields.children[0]?.id] = main_fields.children[0].value
      } else {
        exercise_obj = {}
        Array.from(main_fields.children)?.map(exercises => {
          Array.from(exercises.children)?.map((exercise, index) => {
            if (exercise.tagName?.toLowerCase() == "label") return
            exercise_obj[exercise?.id] = exercise?.value
          })
          if (!Object.values(exercise_obj).includes(undefined)) {
            exercises_list.push(exercise_obj)
          }
        })
      }
    });

    function getUniqueListBy(arr, key) {
      return [...new Map(arr.map(item => [item[key], item])).values()]
    }
    main_fields_obj['exercises'] = getUniqueListBy(exercises_list, "exercise")
    main_fields_obj['id'] = parseInt(localStorage?.id)
    main_fields_obj['keys'] = [parseInt(localStorage?.id)]

    console.error(main_fields_obj)
  }

  const addExerciseTot = (e) => {
    e.preventDefault()
    addExercise(exercise_count + 1);
  };

  let create_program_response = useMemo(() => {
    if (loading) return [" "]
    else if (create_program_response_data) {
      localStorage.updateProgram = create_program_response_data?.createProgram[0]
      return create_program_response_data?.createProgram
    }
    else return error
  }, [loading, create_program_response_data, error]);

  useEffect(() => {
    if (create_program_response?.id) {
      setFormData(create_program_response)
      setEdit(false)
      if (location.pathname === "/program/new") {
        setTimeout(() => navigate('/programs/' + create_program_response?.id), 5)
      }
    }

    if (program_data?.data?.getPrograms[0]) {
      localStorage.updateProgram = JSON.stringify(program_data?.data?.getPrograms[0])
      setProgramData(JSON.parse(localStorage?.updateProgram))
    }

    if (location.pathname === "/program/new" &&
      (id === null || id === undefined)) {
      setEdit("new")
      localStorage.removeItem('updateProgram')
      setFormData({})
      setProgramData({})
      setMappingData(Array.from(Array(exercise_count)))
    }

    if (edit) {
      setMappingData(_program_data?.exercises)
    }
  }, [create_program_response, program_data,
    exercise_count, edit
  ]);

  return (
    <div className="create-program w-100 h-100">
      {(edit === true || edit === "new") ? "" :
        <button className="edit-form d-flex" id="submit"
          onClick={(e) => {
            e.preventDefault()
            edit === "new" ? setEdit("new") :
              setEdit(true)
          }
          }>
          <Edit></Edit>
        </button>
      }
      {
        loading ? <Loader />
          : (edit === true || edit === "new") ?
            CreateUpdateProgram(_program_data, handleChange,
              handleExerciseChange, addExerciseTot,
              createprogram, mapping_exercises, edit, updateprogram)
            :
            (<>
              {program_data.loading ? <Loader /> :
                _program_data?.name ? ViewProgram(_program_data) :
                  <div className="m-auto">Please Try Refresh!</div>}
            </>)
      }
      <p>{JSON.stringify(formdata)}</p>
    </div >
  );
}

