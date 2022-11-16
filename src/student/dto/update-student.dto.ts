import { PartialType } from '@nestjs/mapped-types';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateStudentDto {
  @ApiPropertyOptional()
  email?: string;
  @ApiPropertyOptional()
  name?: string;
  @ApiPropertyOptional()
  region?: string;
  @ApiPropertyOptional()
  phone?: string;
  @ApiPropertyOptional()
  address?: string;
}
