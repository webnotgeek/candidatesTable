import {ICandidateAdapter} from "../../models/candidate.interface";
import {PAGE_SIZE} from "../../constants/constants";
import {useFilters} from "../../helpers/hooks";

export const usePagination = (candidates: ICandidateAdapter[]): ICandidateAdapter[] => {

    const {page} = useFilters()
    const pageNumber = Number(page)
    if (pageNumber > 0) {
        return candidates.slice((pageNumber - 1) * PAGE_SIZE, pageNumber * PAGE_SIZE)
    }
    return candidates
}
