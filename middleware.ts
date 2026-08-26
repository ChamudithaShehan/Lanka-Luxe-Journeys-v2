import { NextRequest, NextResponse } from 'next/server';
import { decrypt } from '@/lib/session';

const PUBLIC_PATHS = ['/admin/login', '/api/auth/login'];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow public paths
  if (PUBLIC_PATHS.some((p) => pathname.startsWith(p))) {
    return NextResponse.next();
  }

  // Protect /admin/* and /api/* routes
  if (pathname.startsWith('/admin') || pathname.startsWith('/api')) {
    const session = request.cookies.get('llj_admin_session')?.value;
    const payload = await decrypt(session);

    if (!payload) {
      // API routes get 401, admin pages get redirect
      if (pathname.startsWith('/api')) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
      }
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/api/:path*'],
};
