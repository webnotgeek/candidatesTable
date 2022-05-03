import {useQuery} from "react-query";
import * as api from "../api/candidatesApi";
import {ICandidateAdapter, ICandidatesFilter} from "../models/candidate.interface";
import {PAGE_SIZE} from "../constants/constants";

// const isKeyOfCandidate = (key: string) => (typeof ICandidateAdapter)

const filterCandidates = (candidates: ICandidateAdapter[], filters?: ICandidatesFilter): ICandidateAdapter[] => {

    if (!filters) {
        return candidates;
    }

    const {sortBy, page, ...restFilters} = filters;
    let filteredCandidates = candidates?.filter((candidate: ICandidateAdapter) => {
        return Object.entries(restFilters).every(([k, v]) => (candidate[k as keyof typeof candidate] as string).includes(v))
    });



    if (sortBy) {
        filteredCandidates = filteredCandidates.sort((a, b) => {
            if (filters.sortBy === 'applicationDate') {
                return new Date(a[sortBy as keyof typeof a]).getTime() - new Date(b[sortBy as keyof typeof b]).getTime()
            }
            // @ts-ignore
            return a[sortBy] - b[sortBy]
        });
    }

    return filteredCandidates;

}


export const useGetCandidates = (filter: any) => {
    return useQuery(
        ['candidates'],
        () => api.getCandidates(),
        {
            retry: 3,
            staleTime: Infinity,
            refetchOnMount: true,
            select: (candidates: ICandidateAdapter[]) => {
                const availablePositions = candidates?.map((candidate) => candidate.position);
                const uniquePositions: string [] = Array.from(new Set(availablePositions));
                return {
                    candidates: filterCandidates(candidates, filter),
                    positions: uniquePositions
                }
            },
        });
}
