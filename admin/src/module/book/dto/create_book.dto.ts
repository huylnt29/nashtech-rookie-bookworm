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
  MIN,
  MinLength,
} from 'class-validator';

export class CreateBookDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MinLength(7)
  @MaxLength(300)
  name: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  description: string;

  // @ApiProperty()
  // @IsNumber()
  // @Min(1800)
  // @Max(2024)
  // publishedYear: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  publisherId: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  categoryId: number;

  @ApiProperty()
  @IsArray()
  @IsOptional()
  authorIds: number[];

  @ApiProperty()
  @IsArray()
  @IsOptional()
  images: Express.Multer.File[];
}
