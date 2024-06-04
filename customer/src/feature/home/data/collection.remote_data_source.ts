import ApiClient from "../../../core/network/remote/api_client";
import { Collection } from "./model/collection.type";

export class CollectionRemoteDataSource {
  static async getFeature(): Promise<Collection[]> {
    const query = `
    query {
     collections(where: {
       OR: [{
         code: "#sale",
       }, {
         code: "#popular"
       }, {
         code: "#recommended"
       }]
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
     },
   }
     `;
    return (await ApiClient.postGraphQL(query)).data.collections;
  }
  static async getOthers(): Promise<Collection[]> {
    const query = `
     query {
      collections(where: {
        NOT: [{
          code: "#sale",
        }, {
          code: "#popular"
        }, {
          code: "#recommended"
        }]
      }) {
        id
        name
        description
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
      },
    }
      `;
    return (await ApiClient.postGraphQL(query)).data.collections;
  }
}
