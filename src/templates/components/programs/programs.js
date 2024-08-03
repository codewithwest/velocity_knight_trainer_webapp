import { useMemo } from "react";
import ProgramCards from "./program_card.js";
import { get_programs } from '../../../providers/data_schema/graphql/program.js';
import { useQuery } from "@apollo/client";
import "../../../styles/components/program_cards.css"
import AddBoxOutlined from "@mui/icons-material/AddBoxOutlined.js";
import { Link, useNavigate } from "react-router-dom";

export function Programs({ is_logged_in }) {

    const { data, loading } = useQuery(get_programs, {
        variables: { input: { keys: parseInt(localStorage.getItem("id")) } },
        fetchPolicy: "cache-and-network",
        nextFetchPolicy: "cache-first",
    });

    let all_programs = useMemo(() =>
        loading ? [" "] : data?.getPrograms
        , [loading, data]);

    return (
        <>
            <div className="new_program d-flex">
                <Link className="d-flex w-100 center-content"
                    to={'/program/new'}>
                    <AddBoxOutlined>
                    </AddBoxOutlined>
                    New Program
                </Link>
            </div>
            <br />
            {all_programs?.map((program, index) =>
            (

                <div key={index} className="programs-cont rounded-md">
                    <div key={program?.id} className="program-card-cont">
                        {ProgramCards(program)}
                    </div>
                </div>
            ))}
        </>

    )
}