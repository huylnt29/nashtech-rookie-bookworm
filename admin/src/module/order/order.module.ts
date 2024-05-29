import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/core/prisma/prisma.module';
import { OrderPublicController } from './order.public.controller';
import { OrderService } from './order.service';
import { CustomerService } from '../customer/customer.service';

@Module({
  imports: [PrismaModule],
  controllers: [OrderPublicController],
  providers: [OrderService, CustomerService],
  exports: [OrderService],
})
export class OrderModule {}
