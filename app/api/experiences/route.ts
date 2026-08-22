import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const experiences = await prisma.experience.findMany();
    return NextResponse.json(experiences);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch experiences' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const experience = await prisma.experience.create({ data: body });
    return NextResponse.json(experience, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Failed to create experience' }, { status: 500 });
  }
}
