import { Link } from "react-router-dom"
import "../../../styles/components/program_cards.css";
import { OpenInBrowserOutlined } from "@mui/icons-material"

export default function ProgramCards(program) {
    return (
        <div className="program-card w-100 rounded-md
                   shadow-sm no-underline p-2">
            <div className="d-flex w-100">
                <h4 key={program.id} className="program-header d-flex center-content w-100 p-1 overflow-hidden">
                    {program.name ?? "standard"}</h4>
                <Link className="d-flex center-content p-2 mb-auto" to={{ pathname: `/programs/${program.id}`, state: program }}>
                    <OpenInBrowserOutlined></OpenInBrowserOutlined>
                </Link>
            </div>
            <div className="flex flex-col">
                <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex"></div>
                <div className="relative overflow-hidden shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right ">
                        <thead className="text-xs uppercase bg-gray-50 dark:bg-gray-600">
                            <tr className="sm:rounded-md">
                                <th scope="col" className="px-3 py-3 text-md capitalize">Exercise</th>
                                <th scope="col" className="px-3 py-3 text-md capitalize">Reps</th>
                                <th scope="col" className="px-3 py-3 text-md capitalize">Sets</th>
                                <th scope="col" className="px-3 py-3 text-md capitalize">Rest</th>
                            </tr>
                        </thead>
                        <tbody>
                            {program?.exercises?.map((exercise, idx) => (
                                <tr key={idx} className="">
                                    <td className="px-3 py-2 text-md">{exercise?.exercise ?? ""}</td>
                                    <td className="px-3 py-2 text-md">{exercise?.sets ?? ""}</td>
                                    <td className="px-3 py-2 text-md">{exercise?.reps ?? ""}</td>
                                    <td className="px-3 py-2 text-md">{exercise?.rest ?? ""}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}