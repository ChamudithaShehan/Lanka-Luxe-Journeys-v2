import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const slide = await prisma.heroSlide.findUnique({ where: { id } });
    if (!slide) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json(slide);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch hero slide' }, { status: 500 });
  }
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await req.json();
    const slide = await prisma.heroSlide.update({ where: { id }, data: body });
    return NextResponse.json(slide);
  } catch {
    return NextResponse.json({ error: 'Failed to update hero slide' }, { status: 500 });
  }
}

export async function DELETE(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    await prisma.heroSlide.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Failed to delete hero slide' }, { status: 500 });
  }
}
