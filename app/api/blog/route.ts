import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const articles = await prisma.blogArticle.findMany({ orderBy: { createdAt: 'desc' } });
    return NextResponse.json(articles);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch blog articles' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const article = await prisma.blogArticle.create({ data: body });
    return NextResponse.json(article, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Failed to create article' }, { status: 500 });
  }
}
