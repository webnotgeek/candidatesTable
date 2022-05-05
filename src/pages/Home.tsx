import CandidateTable from "../components/candidate-table/CandidateTable";
import Footer from "../components/Footer";
import React from "react";
import {useGetCandidates} from "../services/candidates.service";
import {Filters} from "../components/filters/Filters";
import {useFilters} from "../helpers/hooks";
import {Header} from "../components/header/Header";

export const Home = () => {
    const filters = useFilters();
    const {data, isError, isLoading} = useGetCandidates(filters)

    return (
        <div className="main-layout">
            <Header/>

            <div className="content flex flex-column grow width-full m-x-auto">
                <Filters positions={data?.positions || []}/>
                <div className="candidates-table-container flex flex-column grow">
                    {isLoading && <h1>Loading</h1>}
                    {isError && <h1>Something went wrong</h1>}
                    {!!data?.candidates.length && <CandidateTable candidates={data.candidates}/>}
                </div>
            </div>

            <Footer/>
        </div>
    )
}
