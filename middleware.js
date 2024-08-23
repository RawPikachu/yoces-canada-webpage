import { NextResponse } from 'next/server';

export function middleware(req) {
  const hostname = req.headers.get('host');
  const subdomain = hostname.match(/^([^.]+)\./)?.[1];

  if (subdomain && subdomain.startsWith('hackathon')) {
    return NextResponse.rewrite(new URL('/hackathon', req.url));
  }

  return NextResponse.next();
}