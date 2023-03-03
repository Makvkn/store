import axios, {AxiosResponse} from "axios";
import {ICard} from "../store/reducers/cards/types"

export default class UserService {
    static async getCards(): Promise<AxiosResponse<ICard[]>> {
        return axios.get<ICard[]>('./cards.json')
    }
}