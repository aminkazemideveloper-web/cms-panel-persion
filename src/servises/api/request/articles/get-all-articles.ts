import { apiRequest } from "../../confige/instance"


export const getAllArticlesRequest = async ()=>{
  const {data} = await apiRequest.get("/articles")
  return data
}