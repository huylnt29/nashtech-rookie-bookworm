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
  @MinLength(5)
  @MaxLength(300)
  name: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  description: string;

  @ApiProperty()
  @IsOptional()
  publishedYear: number;

  @ApiProperty()
  @IsOptional()
  publisherId: number;

  @ApiProperty()
  @IsOptional()
  categoryId: number;

  @ApiProperty()
  @IsOptional()
  authorIds: number[];

  @ApiProperty()
  @IsArray()
  @IsOptional()
  images: Express.Multer.File[];
}
