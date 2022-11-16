import { Module } from '@nestjs/common';
import { StudentController } from './student.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentEntity } from './entities/student.entity';
import { StudentService } from './student.service';

@Module({
  imports: [TypeOrmModule.forFeature([StudentEntity])],
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule {}
