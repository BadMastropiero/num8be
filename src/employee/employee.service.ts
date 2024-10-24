import { Injectable } from '@nestjs/common';
import { CreateEmployeeInput } from './dto/create-employee.input';
import { UpdateEmployeeInput } from './dto/update-employee.input';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class EmployeeService {
  constructor(private prisma: PrismaService) {}

  async create(createEmployeeInput: CreateEmployeeInput) {
    const { departmentId, ...rest } = createEmployeeInput;
    const departmentExists = await this.prisma.department.findUnique({
      where: { id: departmentId },
    });

    if (!departmentExists) {
      throw new Error(`Department with id ${departmentId} does not exist.`);
    }

    return this.prisma.employee.create({
      data: { ...rest, department: { connect: { id: departmentId } } },
      include: {
        department: true,
      },
    });
  }

  findAll() {
    return this.prisma.employee.findMany({
      include: {
        department: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.employee.findUnique({
      where: { id },
      include: {
        department: true,
      },
    });
  }

  update(id: number, updateEmployeeInput: UpdateEmployeeInput) {
    return this.prisma.employee.update({
      where: { id },
      data: updateEmployeeInput,
      include: {
        department: true,
      },
    });
  }

  remove(id: number) {
    return this.prisma.employee.delete({
      where: { id },
    });
  }
}
