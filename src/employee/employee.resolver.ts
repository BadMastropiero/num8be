import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { EmployeeService } from './employee.service';
import { CreateEmployeeInput } from './dto/create-employee.input';
import { UpdateEmployeeInput } from './dto/update-employee.input';

@Resolver('Employee')
export class EmployeeResolver {
  constructor(private readonly employeeService: EmployeeService) {}

  @Mutation('createEmployee')
  create(
    @Args('createEmployeeInput') createEmployeeInput: CreateEmployeeInput,
  ) {
    return this.employeeService.create(createEmployeeInput);
  }

  @Query('getEmployees')
  findAll() {
    return this.employeeService.findAll();
  }

  @Query('getEmployee')
  findOne(@Args('id') id: number) {
    return this.employeeService.findOne(id);
  }

  @Mutation('updateEmployee')
  update(
    @Args('updateEmployeeInput') updateEmployeeInput: UpdateEmployeeInput,
  ) {
    return this.employeeService.update(
      updateEmployeeInput.id,
      updateEmployeeInput,
    );
  }

  @Mutation('removeEmployee')
  remove(@Args('id') id: number) {
    return this.employeeService.remove(id);
  }
}
