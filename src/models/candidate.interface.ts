export interface ICandidate{
    application_date: string;
    birth_date: string;
    email: string;
    id: string;
    name: string;
    position_applied: string;
    status: string;
    year_of_experience: number;
}

export interface ICandidateAdapter {
    id: string;
    name: string;
    email: string;
    age: number;
    experience: number;
    position: string;
    applicationDate: string | any;
    status: CandidateStatusEnum;
}

export interface ICandidatesFilter {
    name: string;
    status: string;
    position: string;
    sortBy: string;
    page: string;
}

export interface ISortCandidates {
    sortBy: string;
    direction?: 'ASC' | 'DESC';
}

export enum CandidateStatusEnum {
    APPROVED = 'approved',
    REJECTED = 'rejected',
    WAITING = 'waiting',
}

export enum SortDirectionEnum {
    ASC = 'ASC',
    DESC = 'DESC',
}
