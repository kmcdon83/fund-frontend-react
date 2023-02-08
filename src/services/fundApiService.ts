import axios, { CancelTokenSource } from "axios";
import configData from "../config.json";
let cancelToken: CancelTokenSource;
export const SearchFunds = async (query: string) => {
  if (typeof cancelToken != typeof undefined) {
    cancelToken.cancel("Operation canceled due to new request.");
  }
  cancelToken = axios.CancelToken.source();
  try {
    const results = await axios.get(
      `${configData.FUND_API}/SearchFunds?search=${query}`,
      {
        cancelToken: cancelToken.token,
      }
    );
    return results;
  } catch (error) {
    console.error(error);
  }
};
