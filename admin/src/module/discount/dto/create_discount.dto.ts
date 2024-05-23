import { ApiProperty } from '@nestjs/swagger';
import {
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
  @IsBoolean()
  isRecurring: boolean;

  postValidate(): boolean {
    return this.minQuantity < this.maxQuantity;
  }
}
