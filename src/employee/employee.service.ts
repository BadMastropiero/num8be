import { Injectable, NotFoundException } from '@nestjs/common';
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
      data: {
        ...rest,
        department: { connect: { id: departmentId } },
        departmentHistory: {
          create: {
            startDate: new Date(),
            department: { connect: { id: departmentId } },
          },
        },
      },
      include: {
        department: true,
        departmentHistory: {
          orderBy: { startDate: 'desc' },
          include: { department: true },
        },
      },
    });
  }

  findAll() {
    return this.prisma.employee.findMany({
      include: {
        department: true,
        departmentHistory: {
          orderBy: { startDate: 'desc' },
          include: { department: true },
        },
      },
    });
  }

  findOne(id: number) {
    return this.prisma.employee.findUnique({
      where: { id },
      include: {
        department: true,
        departmentHistory: {
          orderBy: { startDate: 'desc' },
          include: { department: true },
        },
      },
    });
  }

  async update(id: number, updateEmployeeInput: UpdateEmployeeInput) {
    const employee = await this.prisma.employee.findUnique({
      where: { id },
    });

    if (!employee) {
      throw new NotFoundException(`Employee with ID ${id} not found`);
    }

    let shouldUpdateDepartmentHistory = false;
    if (employee.departmentId !== updateEmployeeInput.departmentId) {
      const departmentExists = this.prisma.department.findUnique({
        where: { id: updateEmployeeInput.departmentId },
      });

      if (!departmentExists) {
        throw new Error(
          `Department with id ${updateEmployeeInput.departmentId} does not exist.`,
        );
      }
      shouldUpdateDepartmentHistory = true;
    }

    return this.prisma.employee.update({
      where: { id },
      data: {
        ...updateEmployeeInput,
        departmentHistory: shouldUpdateDepartmentHistory
          ? {
              create: {
                startDate: new Date(),
                department: {
                  connect: { id: updateEmployeeInput.departmentId },
                },
              },
            }
          : undefined,
      },
      include: {
        department: true,
        departmentHistory: {
          orderBy: { startDate: 'desc' },
          include: { department: true },
        },
      },
    });
  }

  remove(id: number) {
    return this.prisma.employee.delete({
      where: { id },
    });
  }
}
