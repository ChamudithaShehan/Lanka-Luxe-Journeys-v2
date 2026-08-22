import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const hotel = await prisma.luxuryHotel.findUnique({ where: { id } });
    if (!hotel) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json(hotel);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch hotel' }, { status: 500 });
  }
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await req.json();
    const hotel = await prisma.luxuryHotel.update({ where: { id }, data: body });
    return NextResponse.json(hotel);
  } catch {
    return NextResponse.json({ error: 'Failed to update hotel' }, { status: 500 });
  }
}

export async function DELETE(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    await prisma.luxuryHotel.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Failed to delete hotel' }, { status: 500 });
  }
}
