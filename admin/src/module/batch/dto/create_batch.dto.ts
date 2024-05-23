import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class CreateBatchDto {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  bookId: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  initialQuantity: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  originalPrice: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  price: number;
}
