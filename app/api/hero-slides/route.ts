import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const slides = await prisma.heroSlide.findMany({ orderBy: { order: 'asc' } });
    return NextResponse.json(slides);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch hero slides' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const slide = await prisma.heroSlide.create({ data: body });
    return NextResponse.json(slide, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Failed to create hero slide' }, { status: 500 });
  }
}
