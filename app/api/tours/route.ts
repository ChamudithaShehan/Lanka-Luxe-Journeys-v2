import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const tours = await prisma.tourPackage.findMany({ orderBy: { createdAt: 'asc' } });
    return NextResponse.json(tours);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch tours' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const tour = await prisma.tourPackage.create({ data: body });
    return NextResponse.json(tour, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create tour' }, { status: 500 });
  }
}
