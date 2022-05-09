import "../candidate-table/CandidateTable.scss"

export const LoadingTable = () => {

    return (
        <>
            <div className="table-container grow">
                <div className="container">
                    <div className="table-holder">
                        <table className="table">
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

                            {[...Array(10)].map((_,i) => (
                                <tr key={i}>
                                    <td className="text-left"><span></span></td>
                                    <td className="text-left"><span></span></td>
                                    <td className="text-left"><span></span></td>
                                    <td className="text-left"><span></span></td>
                                    <td className="text-left"><span></span></td>
                                    <td className="text-left"><span></span></td>
                                    <td className="text-left"><span></span></td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
