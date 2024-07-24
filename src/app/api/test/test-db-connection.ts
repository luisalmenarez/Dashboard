import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: Request, res: Response): Promise<Response> {
  try {
    console.log('Testing database connection...');
    const result = await prisma.$queryRaw`SELECT 1 + 1 AS result`;
    console.log('Connection successful:', result);

    const companies = await prisma.company.findMany({ take: 5 });
    console.log('Successfully retrieved companies:', companies);

    return new Response(JSON.stringify({ success: true, result, companies }), {
      status: 200,
    });
  } catch (error: any) {
    console.error('Connection failed:', error);
    return new Response(
      JSON.stringify({
        error: 'Failed to connect to database',
        details: error.message,
      }),
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
