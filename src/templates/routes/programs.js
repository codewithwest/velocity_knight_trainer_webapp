import { useMemo } from "react";
import ProgramCards from "../components/program_cards";
import gqlDefined from '../../providers/data_schema/graphql/main';
import { useQuery } from "@apollo/client";
// import { redirect } from "react-router-dom";
const { getPrograms } = gqlDefined

export default function Programs({ is_logged_in }) {
    // useEffect(() => {
    //     // if (!is_logged_in) redirect('/app/auth/user/login')
    // })
    const { data, loading } = useQuery(getPrograms, {
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
            <div key={index}>
                {ProgramCards(program)}
                {ProgramCards(program)}
                {ProgramCards(program)}
            </div>
        ))
    )
}