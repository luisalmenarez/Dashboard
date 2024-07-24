import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    console.log('Attempting to connect to the database...');

    // Test database connection
    const result = await prisma.$queryRaw`SELECT 1 + 1 AS result`;
    const companies = await prisma.company.findMany({ take: 5 });

    return NextResponse.json({
      success: true,
      result,
      companies,
    });
  } catch (error: any) {
    console.error('Error connecting to the database:', error);
    return NextResponse.json({
      error: 'Failed to connect to the database',
      details: error.message,
    });
  } finally {
    await prisma.$disconnect();
  }
}
