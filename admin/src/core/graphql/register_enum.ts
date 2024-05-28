import { registerEnumType } from '@nestjs/graphql';

export enum State {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

registerEnumType(State, {
  name: 'State',
});
