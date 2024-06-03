import { CreateReviewRequest } from "../../../feature/book_detail/data/model/create_review_request.class";
import { Order } from "../../../feature/order/data/model/order.type";
import apiClient from "./api_client_config";
import Endpoint from "./api_endpoint";

class ApiClient {
  static postGraphQL = async (query: string) =>
    await apiClient.post(Endpoint.GRAPHQL, {
      query: query,
    });
  static getBookDetail = async (id: string) =>
    await apiClient.get(Endpoint.BOOK_DETAIL(id));
  static postOrder = async (body: Order) =>
    await apiClient.post(Endpoint.NEW_ORDER, body);
  static postReview = async (body: CreateReviewRequest) =>
    await apiClient.post(Endpoint.NEW_REVIEW, body);
}

export default ApiClient;
