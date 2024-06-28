import axios from "axios"
import { BASE_URL } from "../consts"

let currentRequest: any = null;
export const GET_USERS = (body: any) => {
  if (currentRequest) {
    currentRequest.cancel();
  }
  
  const source = axios.CancelToken.source()
  currentRequest = source


  return axios.post(`${BASE_URL}/users`, body, {
    cancelToken: source.token,
  })
}