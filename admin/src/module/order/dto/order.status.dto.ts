import { OrderStatus } from '@prisma/client';

export type OrderStatusDto = {
  value: OrderStatus;
  isSelected: boolean;
  isSelectable: boolean;
};
