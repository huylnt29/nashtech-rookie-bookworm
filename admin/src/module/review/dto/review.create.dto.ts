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
  @IsOptional()
  @IsString()
  @MinLength(3)
  @MaxLength(50)
  author: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @MinLength(2)
  @MaxLength(500)
  content: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(5)
  rating: number;
}
