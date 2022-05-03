import {FC, useCallback} from "react";
import {useFilters} from "../../helpers/hooks";
import {PAGE_SIZE} from "../../constants/constants";
import {useSearchParams} from "react-router-dom";
import {removeEmptyValues} from "../../helpers/utils";

interface IPaginationProps {
    total: number
}

export const Pagination: FC<IPaginationProps> = ({total}) => {
    const filters = useFilters();
    const [_, setSearchParams] = useSearchParams();
    const pageCount = Math.ceil(total / PAGE_SIZE);
    const handlePageChange = useCallback((page: number) => () => {
        setSearchParams({...removeEmptyValues(filters), page})
    }, [filters]);

    return (
        <ul className="flex">
            {[...Array(pageCount)].map((_, index) => {
                return <button
                    key={index}
                    onClick={handlePageChange(index + 1)}>{index + 1}</button>
            })}
        </ul>
    )
}
