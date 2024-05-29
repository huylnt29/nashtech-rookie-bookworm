import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  MaxLength,
  Min,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { CreateCustomerDto } from 'src/module/customer/dto/customer.create.dto';

export class CreateOrderDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  totalQuantity: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @Min(1000)
  totalPrice: number;

  @ApiProperty({ example: [{ batchId: 1, quantity: 2, price: 29000 }] })
  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateOrderLineDto)
  lines: CreateOrderLineDto[];

  @ApiProperty()
  @IsNotEmpty()
  @IsObject()
  @ValidateNested()
  @Type(() => CreateCustomerDto)
  customer: CreateCustomerDto;
}

export class CreateOrderLineDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  batchId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  quantity: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  price: number;
}
