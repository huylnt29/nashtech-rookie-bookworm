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

export class UpdateDiscountDto {
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  @Min(1)
  minQuantity: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  maxQuantity: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(1)
  percentage: number;

  @ApiProperty()
  @IsOptional()
  @IsDateString()
  startAt: Date;

  @ApiProperty()
  @IsOptional()
  @IsDateString()
  endAt: Date;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  isRecurring: boolean;
}
