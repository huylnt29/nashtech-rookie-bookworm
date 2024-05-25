import { ApiProperty } from '@nestjs/swagger';
import {
  CollectionLayout,
  CollectionMovement,
  CollectionType,
} from '@prisma/client';
import { IsArray, IsDateString, IsOptional, IsString } from 'class-validator';

export class CreateCollectionDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  code: string;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty({ enum: CollectionLayout })
  @IsString()
  layout: CollectionLayout;

  @ApiProperty({ enum: CollectionMovement })
  @IsString()
  movement: CollectionMovement;

  @ApiProperty()
  @IsOptional()
  @IsDateString()
  expiredAt: Date;

  @ApiProperty()
  @IsOptional()
  @IsArray()
  batchIds: number[];
}
