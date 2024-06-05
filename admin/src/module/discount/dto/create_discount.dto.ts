import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsDate,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class CreateDiscountDto {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  minQuantity: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  maxQuantity: number;

  @ApiProperty()
  @IsNumber()
  @Min(0)
  @Max(1)
  percentage: number;

  @ApiProperty()
  @IsDateString()
  startAt: Date;

  @ApiProperty()
  @IsDateString()
  endAt: Date;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  isRecurring: boolean;

  @ApiProperty()
  @IsOptional()
  @IsArray()
  batchIds: number[];

  postValidate(): boolean {
    return this.minQuantity < this.maxQuantity;
  }
}
