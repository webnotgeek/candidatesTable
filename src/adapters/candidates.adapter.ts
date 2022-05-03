import {ICandidate, ICandidateAdapter} from "../models/candidate.interface";

const candidatesAdapter = (candidates?: ICandidate[]): ICandidateAdapter[] => {
    if (!!candidates?.length) {
        return candidates?.map((candidate: any) => {
            return {
                id: candidate.id,
                name: candidate.name,
                email: candidate.email,
                age: new Date().getFullYear() - candidate.birth_date.split("-")[0],
                experience: candidate.year_of_experience,
                applicationDate: candidate.application_date,
                position: candidate.position_applied,
                status: candidate.status,
            }
        })
    }

    return [];
}

export default candidatesAdapter;
