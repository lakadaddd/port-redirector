import { NextResponse } from 'next/server';

function getRedirects() {
  try {
    return JSON.parse(process.env.PORT_REDIRECTS || '{}');
  } catch {
    return {};
  }
}

export async function GET(request, { params }) {
  const { port } = params;
  const redirects = getRedirects();
  const destination = redirects[port];

  const validPort = /^\d+$/.test(port) && Number(port) >= 1 && Number(port) <= 65535;
  const validDestination = typeof destination === 'string' && /^https?:\/\//i.test(destination);

  if (!validPort || !validDestination) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.redirect(destination, 307);
}
