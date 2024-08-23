import { NextResponse } from 'next/server';

export function middleware(req) {
  const hostname = req.headers.get('host');
  const subdomain = hostname.match(/^([^.]+)\./)?.[1];

  switch (true) {
    case subdomain.startsWith('hackathon'):
      return NextResponse.rewrite(new URL(`/hackathon${req.nextUrl.pathname}`, req.url));
    default:
      return NextResponse.next();
  }
}