import Header from "../../components/header/Header";
import CandidateTable from "../../components/candidate-table/CandidateTable";
import Footer from "../../components/Footer";
import React, {useEffect, useState} from "react";
import {useGetCandidates} from "../../services/candidates.service";
import {Filters} from "../../components/filters/Filters";
import {useFilters} from "../../helpers/hooks";

const Home = () => {
    const filters = useFilters();
    const {data, isError, isLoading} = useGetCandidates(filters)

    return (
        <div className="main-layout">
            <Header/>
            <div className="content grow container width-full m-x-auto">
                <div className="candidates-table">
                    <h2 className="page-title">Applications</h2>
                    <Filters positions={data?.positions || []}/>
                    <div className="candidates">
                        {isLoading && <h1>Loading</h1>}
                        {isError && <h1>Something went wrong</h1>}
                        {!!data?.candidates.length && <CandidateTable candidates={data.candidates}/>}
                    </div>

                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;
