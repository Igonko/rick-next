import { AxiosResponse } from "axios";
import request from "./request";
import * as part from "../utils/constans";

const apiPart = part.default;
const url = `${apiPart.schema}${apiPart.host}${apiPart.helpers.api}`;

export class CharactersRequest {
  public GetCharacters = (): Promise<AxiosResponse> => {
    return request.get(url + `${apiPart.helpers.character}`);
  };

  public GetCharactersById = (id: number): Promise<AxiosResponse> => {
    return request.get(url + `${apiPart.helpers.character}/${id}`);
  };
  
  public GetCharactersByName = (name: string): Promise<AxiosResponse> => {
    return request.get(url + `${apiPart.helpers.character}${apiPart.helpers.name + name}`);
  };

  public GetCharactersByPage= (page: string): Promise<AxiosResponse> => {
    return request.get(url + `${apiPart.helpers.character}${apiPart.helpers.page + page}`);
  };
}

const instance = new CharactersRequest();

export default instance;
