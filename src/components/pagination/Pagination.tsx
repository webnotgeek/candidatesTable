import {FC, useCallback, useEffect} from "react";
import {useFilters} from "../../helpers/hooks";
import {PAGE_SIZE} from "../../constants/constants";
import {useSearchParams} from "react-router-dom";
import {removeEmptyValues} from "../../helpers/utils";
import './Pagination.scss';

interface IPaginationProps {
    total: number
}

export const Pagination: FC<IPaginationProps> = ({total}) => {
    const filters = useFilters();
    const [searchParams, setSearchParams] = useSearchParams();
    const pageCount = Math.ceil(total / PAGE_SIZE);
    const pageCountArr = [...Array(pageCount)];
    const pageNumber = Number(searchParams.get('page'));
    const currentPage = searchParams.get('page') || 1;

    const handlePageChange = useCallback((page: number) => () => {
        const canPaginationNavigate = page <= pageCount && page > 0;
        if (canPaginationNavigate) {
            setSearchParams({...removeEmptyValues(filters), page})
        }
    }, [filters]);

    useEffect(() => {
        if (pageNumber > pageCount || pageNumber < 1) {
            setSearchParams({...removeEmptyValues(filters), page: 1})
        }
    }, [])

    return (
        <div className="pagination-container">
            <div className="container">
                <ul className="page" id="pages">
                    <li className="page__numbers"
                        onClick={handlePageChange(pageNumber - 1)}>previous
                    </li>
                    {pageCountArr.map((_, index) => {
                        return (<li className={`page__numbers ${currentPage == (index + 1) ? "active" : ""}`}
                                    key={index}
                                    onClick={handlePageChange(index + 1)}>{index + 1}</li>)
                    })}
                    <li className="page__numbers"
                        onClick={handlePageChange(pageNumber + 1)}>next
                    </li>
                </ul>
            </div>
        </div>
    )
}
