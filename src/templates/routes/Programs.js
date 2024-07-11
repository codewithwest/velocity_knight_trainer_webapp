import { useMemo } from "react";
import ProgramCards from "../../components/programCards";
import gqlDefined from '../../dataSchema/graphql/main';
import { useQuery } from "@apollo/client";
const { getPrograms } = gqlDefined

export default function Programs() {
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
            <div className="">
                {ProgramCards(program)}
            </div>
        ))
    )
}