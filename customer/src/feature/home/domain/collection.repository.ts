import { CollectionRemoteDataSource } from "../data/collection.remote_data_source";
import { Collection } from "../data/model/collection.type";

export class CollectionRepository {
  static async getFeature(): Promise<Collection[]> {
    return CollectionRemoteDataSource.getFeature();
  }
  static async getOthers(): Promise<Collection[]> {
    return CollectionRemoteDataSource.getOthers();
  }
}
