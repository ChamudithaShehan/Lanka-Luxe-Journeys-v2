import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const destinations = await prisma.destination.findMany({ orderBy: { createdAt: 'asc' } });
    return NextResponse.json(destinations);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch destinations' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const destination = await prisma.destination.create({ data: body });
    return NextResponse.json(destination, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Failed to create destination' }, { status: 500 });
  }
}
