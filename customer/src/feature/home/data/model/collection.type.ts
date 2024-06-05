import { CollectionBatch } from "./collection_batch.type";
import { CollectionLayout } from "./collection_layout.enum";
import { CollectionMovement } from "./collection_movement.enum";

export type Collection = {
  name: string;
  description?: string | null;
  code: string;
  layout: CollectionLayout;
  movement: CollectionMovement;
  batches: CollectionBatch[];
};
