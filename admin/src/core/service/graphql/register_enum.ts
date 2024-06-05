import { ObjectType, registerEnumType } from '@nestjs/graphql';

export enum State {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

export enum CollectionLayout {
  GRID = 'GRID',
  LIST = 'LIST',
}

export enum CollectionMovement {
  AUTO = 'AUTO',
  MANUAL = 'MANUAL',
}

registerEnumType(State, {
  name: 'State',
});

registerEnumType(CollectionLayout, {
  name: 'CollectionLayout',
});

registerEnumType(CollectionMovement, {
  name: 'CollectionMovement',
});
