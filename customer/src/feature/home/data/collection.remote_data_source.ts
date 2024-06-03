import ApiClient from "../../../core/network/remote/api_client";
import { Collection } from "./model/collection.type";

export class CollectionRemoteDataSource {
  static async getOnSale(): Promise<Collection> {
    const query = `
          query {
               collection(where: {
               code: "#sale"
               }) {
               id
               name
               batches {
               id 
               price
               book {
                    id
                    name
                    imageUrls
                    averageRating
                    totalSoldQuantity
               }
               discount {
                    id
                    percentage
               }
               }
               }
          }
     `;
    return (await ApiClient.postGraphQL(query)).data.collection;
  }
}
