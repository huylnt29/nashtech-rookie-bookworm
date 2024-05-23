import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, Min } from 'class-validator';

export class UpdateBatchDto {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  @IsOptional()
  soldQuantity: number;
}
