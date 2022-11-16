import { ApiProperty } from '@nestjs/swagger';
import { StudentEntity } from '../entities/student.entity';

export class CreateStudentDto
  implements Omit<StudentEntity, 'id' | 'createdDate'>
{
  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  region: string;

  @ApiProperty()
  address: string;
}
