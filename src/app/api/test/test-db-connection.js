import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    console.log('Testing database connection...');
    const result = await prisma.$queryRaw`SELECT 1 + 1 AS result`;
    console.log('Connection successful:', result);

    const companies = await prisma.company.findMany({ take: 5 });
    console.log('Successfully retrieved companies:', companies);

    res.status(200).json({ success: true, result, companies });
  } catch (error) {
    console.error('Connection failed:', error);
    res
      .status(500)
      .json({ error: 'Failed to connect to database', details: error.message });
  } finally {
    await prisma.$disconnect();
  }
}
