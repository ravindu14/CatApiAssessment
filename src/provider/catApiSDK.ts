import fetch from "node-fetch";

export class CatApiSdk {
  private readonly accessToken: string;

  constructor(accessToken: string) {
    this.accessToken = accessToken;
  }

  private getApiUrl(): string {
    return "https://api.thecatapi.com/v1";
  }

  private filterTopBreeds(breeds: any[], category: string): any[] {
    const sortedResult = breeds
      .sort((a, b) => b[category] - a[category])
      .slice(0, 5);

    return sortedResult;
  }

  private async request(url: string, method = "GET"): Promise<any | null> {
    const response = await fetch(`${this.getApiUrl()}/${url}`, {
      method,
      headers: {
        "x-api-key": `${this.accessToken}`,
        "Content-Type": "application/json",
      },
    });

    const res = await response.json();
    return res;
  }

  public async getCatBreeds(category: string): Promise<any> {
    const content = await this.request("breeds");

    const topBreeds = this.filterTopBreeds(content, category);

    return topBreeds;
  }
}
