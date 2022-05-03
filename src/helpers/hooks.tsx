import {useSearchParams} from "react-router-dom";
import {ICandidatesFilter} from "../models/candidate.interface";

export const useFilters = () : ICandidatesFilter => {
    const [searchParams, setSearchParams] = useSearchParams();

    const filter: ICandidatesFilter = {
        name: searchParams.get('name') || '',
        position: searchParams.get('position') || '',
        status: searchParams.get('status') || '',
        sortBy: searchParams.get('sortBy') || '',
        page: searchParams.get('page') || '1',
    }
    return filter;
}
