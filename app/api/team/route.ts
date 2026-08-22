import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const members = await prisma.teamMember.findMany();
    return NextResponse.json(members);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch team members' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const member = await prisma.teamMember.create({ data: body });
    return NextResponse.json(member, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Failed to create team member' }, { status: 500 });
  }
}
