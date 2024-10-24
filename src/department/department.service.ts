import { Injectable } from '@nestjs/common';
import { CreateDepartmentInput } from './dto/create-department.input';
import { UpdateDepartmentInput } from './dto/update-department.input';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class DepartmentService {
  constructor(private prisma: PrismaService) {}

  create(createDepartmentInput: CreateDepartmentInput) {
    return this.prisma.department.create({
      data: createDepartmentInput,
    });
  }

  findAll() {
    return this.prisma.department.findMany();
  }

  findOne(id: number) {
    return this.prisma.department.findUnique({
      where: { id },
    });
  }

  update(id: number, updateDepartmentInput: UpdateDepartmentInput) {
    return this.prisma.department.update({
      where: { id },
      data: updateDepartmentInput,
    });
  }

  remove(id: number) {
    return this.prisma.department.delete({
      where: { id },
    });
  }
}
