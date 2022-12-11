import { CatApiSdk } from "../../provider/catApiSDK";

export class CatService {
  private catApi;
  constructor() {
    this.catApi = new CatApiSdk(process.env.API_KEY);
  }

  public getTopCatBreeds = async (category: string): Promise<any> => {
    return await this.catApi.getCatBreeds(category);
  };
}
