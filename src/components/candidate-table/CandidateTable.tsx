import {ICandidateAdapter} from "../../models/candidate.interface";
import './CandidateTable.scss';
import {Pagination} from "../pagination/Pagination";
import {usePagination} from "../pagination/usePagination";
import {FC} from "react";

interface ICandidateTableProps {
    candidates: ICandidateAdapter[]
}

const CandidateTable: FC<ICandidateTableProps> = ({candidates}) => {
    const candidatesPage = usePagination(candidates);
    return (
        <>
            <div className="table-container">
                <div className="container">
                    <table className="table-fill">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Years of Experience</th>
                            <th>Position Applied</th>
                            <th>Applied</th>
                            <th>Status</th>
                        </tr>
                        </thead>
                        <tbody className="table-hover">
                        {candidatesPage.map((candidate) => (
                            <tr key={candidate?.id}>
                                <td className="text-left">{candidate.name}</td>
                                <td className="text-left">{candidate.email}</td>
                                <td className="text-left">{candidate.age}</td>
                                <td className="text-left">{candidate.experience}</td>
                                <td className="text-left">{candidate.position}</td>
                                <td className="text-left">{candidate.applicationDate}</td>
                                <td className="text-left">{candidate.status}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="pagination-holder flex flex-column grow">
                <Pagination total={candidates.length}/>
            </div>
        </>

    )
}

export default CandidateTable;
