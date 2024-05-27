import apiClient from "./api_client_config";
import Endpoint from "./endpoint";

class ApiClient {
  static postGraphQL = async (query: string) =>
    await apiClient.post(Endpoint.GRAPHQL, {
      query: query,
    });
}

export default ApiClient;
