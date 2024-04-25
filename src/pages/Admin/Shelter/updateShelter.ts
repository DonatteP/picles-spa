import { IUpdateShelterRequest, IUpdateShelterResponse } from "../../../interfaces/shelter";
import httpClient from "../../../services/api/httpClient";

export async function updateShelter(params: IUpdateShelterRequest): Promise<IUpdateShelterResponse> {
    try {
        const response = await httpClient.put<IUpdateShelterResponse>("/Shelter", params)
        return response.data
    } catch (error) {
        console.error("Erro ao atualizar abrigo:", error)
        throw error
    }
}