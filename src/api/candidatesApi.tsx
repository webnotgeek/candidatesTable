import axios, {AxiosResponse} from "axios";
import candidatesAdapter from "../adapters/candidates.adapter";
import {ICandidate, ICandidateAdapter} from "../models/candidate.interface";
import {apiVersion, endpointPath} from "../constants/constants";

const url = `https://personio-fe-test.herokuapp.com/${endpointPath}/${apiVersion}/`;
const api = axios.create({
    baseURL: url
})

interface ICandidateResponse {
    data?: ICandidate[]
    error?: {
        message: string;
        code: number;
    }
}

export const getCandidates = async (): Promise<ICandidateAdapter[]> => {
    let response:  AxiosResponse<ICandidateResponse>
    response = await api.get<ICandidateResponse>('/candidates')
    if (response.data.error) {
        return Promise.reject(response.data.error.message);
    }

    return candidatesAdapter(response?.data.data);
}



