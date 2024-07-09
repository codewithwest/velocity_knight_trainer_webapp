import { Link } from "react-router-dom"

export default function ProgramCards(program) {
    return (
        // <div>
        //     {
        //         all_programs?.map((program, index) =>
        //         (
        <Link key={1} href="/" className="block m-2 max-w-sm p-6  
                  border-gray-900 rounded-lg shadow hover:bg-gray-900
                  dark:bg-gray-800 dark:border-gray-800 dark:hover:bg-black-200 no-underline">

            <h2 key={program.id} className="mb-2 text-2xl font-bold tracking-tight 
            text-gray-900 dark:text-gray-200 text-center capitalize">
                {program.type ?? "standard"}</h2>
            <div className="flex flex-col">

                <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex"></div>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr className="">
                                <th key={1} scope="col" className="px-6 py-3 text-lg capitalize">Exercise</th>
                                <th key={2} scope="col" className="px-6 py-3 text-lg capitalize">Reps</th>
                                <th key={3} scope="col" className="px-6 py-3 text-l capitalize">Sets</th>
                            </tr>
                        </thead>
                        <tbody>

                            {program?.data?.map((exercise, idx) => (
                                <tr key={idx} className="">
                                    {exercise?.split(",")?.map((ext, ix) => (
                                        <td key={ix} className="px-6 py-4 text-base">{ext}</td>
                                    ))}
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
        </Link>
        //         ))
        //     }
        // </div>
    )
}