import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class UpdateBookDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MinLength(7)
  @MaxLength(300)
  @IsOptional()
  name: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  description: string;

  @ApiProperty()
  @IsNumber()
  @Min(1800)
  @Max(2024)
  @IsOptional()
  publishedYear: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  publisherId: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  categoryId: number;
}
