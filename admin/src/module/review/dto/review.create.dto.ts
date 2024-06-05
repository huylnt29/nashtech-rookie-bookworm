import { ApiProperty } from '@nestjs/swagger';
import {
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

export class CreateReviewDto {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  bookId: number;

  @ApiProperty()
  @IsString()
  @MinLength(3)
  @MaxLength(50)
  author: string;

  @ApiProperty()
  @IsString()
  @MinLength(2)
  @MaxLength(500)
  @IsOptional()
  content: string;

  @ApiProperty()
  @IsNumber()
  @Min(1)
  @Max(5)
  @IsOptional()
  rating: number;
}
