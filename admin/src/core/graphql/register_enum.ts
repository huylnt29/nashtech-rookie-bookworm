import { registerEnumType } from '@nestjs/graphql';

export enum State {
  ACTIVE,
  INACTIVE,
}

registerEnumType(State, {
  name: 'State',
});
