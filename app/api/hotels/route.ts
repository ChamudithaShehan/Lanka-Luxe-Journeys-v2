import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const hotels = await prisma.luxuryHotel.findMany({ orderBy: { createdAt: 'asc' } });
    return NextResponse.json(hotels);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch hotels' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const hotel = await prisma.luxuryHotel.create({ data: body });
    return NextResponse.json(hotel, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Failed to create hotel' }, { status: 500 });
  }
}
