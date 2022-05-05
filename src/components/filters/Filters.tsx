import React, {FC, useCallback} from "react";
import {useSearchParams} from "react-router-dom";
import {removeEmptyValues} from "../../helpers/utils";
import {useFilters} from "../../helpers/hooks";
import "./Filters.scss";

interface FilterProps {
    positions: string[],
}

export const Filters: FC<FilterProps> = ({positions}) => {
    const filters = useFilters();
    const [_, setSearchParams] = useSearchParams();

    const handleFiltersChange = useCallback((value: Record<string, string>) => {
        filters.page = '';
        setSearchParams({...removeEmptyValues({...filters , ...value})})
    }, [filters])


    return (
        <>
            <div className="filters-container">
                <div className="container">
                    <h2 className="page-title">Applications</h2>
                    <div className="filters flex gap-16px">
                        <input type="text"
                               placeholder="Candidate Name"
                               className="tp-input name-filter"
                               value={filters?.name}
                               onChange={(e) => handleFiltersChange({name: e.target.value})}/>
                        <div className="flex gap-16px grow">

                            <select className="tp-input" name="status"
                                    value={filters?.status}
                                    onChange={(e) => handleFiltersChange({status: e.target.value})}>

                                <option value="">Status</option>
                                <option value="approved">Approved</option>
                                <option value="rejected">Rejected</option>
                                <option value="waiting">Waiting</option>
                            </select>

                            <select className="tp-input"
                                    name="position"
                                    value={filters.position}
                                    onChange={(e) => handleFiltersChange({position: e.target.value})}>
                                <option value="">Positions</option>
                                {
                                    positions.map((position, id) => (
                                        <option value={position}
                                                key={id}>{position}</option>
                                    ))
                                }
                            </select>

                            <select className="tp-input"
                                    name="sortBy"
                                    onChange={(e) => handleFiltersChange({sortBy: e.target.value})}>
                                <option value="">Sort</option>
                                <option value="experience">Years of Experience</option>
                                <option value="applicationDate">Date of Application</option>
                                <option value="position">Position</option>
                            </select>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
