import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class CreateCustomerDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  @MaxLength(100)
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(10)
  @MaxLength(12)
  phone: string;

  @ApiProperty()
  @IsOptional()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(100)
  address: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @MinLength(5)
  @MaxLength(50)
  city: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @MinLength(5)
  @MaxLength(30)
  district: string;
}
