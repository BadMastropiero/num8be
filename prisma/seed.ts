import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const department1 = await prisma.department.create({
    data: {
      name: 'Engineering',
    },
  });
  const department2 = await prisma.department.create({
    data: {
      name: 'Sales',
    },
  });
  const department3 = await prisma.department.create({
    data: {
      name: 'Marketing',
    },
  });
  const department4 = await prisma.department.create({
    data: {
      name: 'HR',
    },
  });

  await prisma.employee.create({
    data: {
      firstName: 'Alice',
      lastName: 'Smith',
      phone: '123-456-7890',
      address: '123 Main St, Houston, TX',
      hireDate: new Date('2020-01-01'),
      department: { connect: { id: department1.id } },
    },
  });

  await prisma.employee.create({
    data: {
      firstName: 'Bob',
      lastName: 'Johnson',
      phone: '123-456-7890',
      address: '123 Main St, Houston, TX',
      hireDate: new Date('2020-01-01'),
      department: { connect: { id: department2.id } },
    },
  });

  await prisma.employee.create({
    data: {
      firstName: 'Charlie',
      lastName: 'Brown',
      phone: '123-456-7890',
      address: '123 Main St, Houston, TX',
      hireDate: new Date('2020-01-01'),
      department: { connect: { id: department3.id } },
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
