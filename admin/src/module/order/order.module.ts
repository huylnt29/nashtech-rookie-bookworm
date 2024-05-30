import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/core/service/prisma/prisma.module';
import { OrderPublicController } from './order.public.controller';
import { OrderService } from './order.service';
import { CustomerService } from '../customer/customer.service';
import { OrderController } from './order.controller';

@Module({
  imports: [PrismaModule],
  controllers: [OrderController, OrderPublicController],
  providers: [OrderService, CustomerService],
  exports: [OrderService],
})
export class OrderModule {}
