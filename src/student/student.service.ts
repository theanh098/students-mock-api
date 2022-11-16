import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { StudentEntity } from './entities/student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(StudentEntity)
    private readonly studentRepository: Repository<StudentEntity>,
  ) {}

  async create({ address, email, name, phone, region }: CreateStudentDto) {
    const newStudent = new StudentEntity();
    newStudent.address = address;
    newStudent.email = email;
    newStudent.phone = phone;
    newStudent.name = name;
    newStudent.region = region;

    await this.studentRepository.save(newStudent);
  }

  async findAll(_page: number, _limit: number) {
    const qb = this.studentRepository
      .createQueryBuilder('student')
      .limit(_limit)
      .offset((_page - 1) * _limit);

    const [list, count] = await Promise.all([qb.getMany(), qb.getCount()]);

    return {
      list,
      count,
    };
  }

  async findOne(id: number) {
    return await this.studentRepository
      .createQueryBuilder('student')
      .where('student.id = :id', { id })
      .getOne();
  }

  async update(id: number, updateStudentDto: UpdateStudentDto) {
    await this.studentRepository
      .createQueryBuilder()
      .update(StudentEntity)
      .set({
        ...updateStudentDto,
      })
      .where('id = :id', { id })
      .execute();
  }

  async remove(id: number) {
    await this.studentRepository
      .createQueryBuilder()
      .delete()
      .from(StudentEntity)
      .where('id = :id', { id })
      .execute();
  }
}
