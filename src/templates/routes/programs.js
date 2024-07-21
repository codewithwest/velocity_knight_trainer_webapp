import { useMemo } from "react";
import ProgramCards from "../components/programs/program_card.js";
import { get_programs } from '../../providers/data_schema/graphql/main';
import { useQuery } from "@apollo/client";
import "../../styles/components/program_cards.css"

export default function Programs({ is_logged_in }) {

    const { data, loading } = useQuery(get_programs, {
        variables: { key: 1 },
        fetchPolicy: "cache-and-network",
        nextFetchPolicy: "cache-first",
    });

    let all_programs = useMemo(() =>
        loading ? [" "] : data?.getPrograms
        , [loading, data]);

    return (
        all_programs?.map((program, index) =>
        (
            <div className="programs-cont rounded-md">
                <div key={program?.id} className="program-card-cont">
                    {ProgramCards(program)}
                </div>
            </div >
        ))
    )
}