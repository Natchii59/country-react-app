import axios from 'axios';

export class RestCountries {
  private static readonly baseUrl = 'https://restcountries.com/v3.1';

  public static async all() {
    return await axios.get(`${this.baseUrl}/all`);
  }
}
