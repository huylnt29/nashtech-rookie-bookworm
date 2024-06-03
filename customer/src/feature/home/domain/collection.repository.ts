import { CollectionRemoteDataSource } from "../data/collection.remote_data_source";
import { Collection } from "../data/model/collection.type";

export class CollectionRepository {
  static async getOnSale(): Promise<Collection> {
    return CollectionRemoteDataSource.getOnSale();
  }
}
