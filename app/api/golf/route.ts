import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const courses = await prisma.golfCourse.findMany({ orderBy: { createdAt: 'asc' } });
    return NextResponse.json(courses);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch golf courses' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const course = await prisma.golfCourse.create({ data: body });
    return NextResponse.json(course, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Failed to create golf course' }, { status: 500 });
  }
}
