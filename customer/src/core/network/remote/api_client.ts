import apiClient from "./api_client_config";
import Endpoint from "./api_endpoint";

class ApiClient {
  static postGraphQL = async (query: string) =>
    await apiClient.post(Endpoint.GRAPHQL, {
      query: query,
    });
  static getBookDetail = async (id: string) =>
    await apiClient.get(Endpoint.BOOK_DETAIL(id));
}

export default ApiClient;
