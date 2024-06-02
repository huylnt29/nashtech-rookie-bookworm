import { ApiProperty } from '@nestjs/swagger';
import { CollectionLayout, CollectionMovement } from '@prisma/client';
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

export class UpdateCollectionDto {
  @ApiProperty({ enum: CollectionLayout })
  @IsOptional()
  @IsString()
  layout: CollectionLayout;

  @ApiProperty({ enum: CollectionMovement })
  @IsOptional()
  @IsString()
  movement: CollectionMovement;

  @ApiProperty()
  @IsOptional()
  @IsDateString()
  expiredAt: Date;
}
