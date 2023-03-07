import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  // get pathname from request
  const slug = req.nextUrl.pathname.split('/').pop()

  // Get data from query:
  const data = await fetch(`${req.nextUrl.origin}/api/url/${slug}`)

  // return (/) if not found (404)
  if (data.status === 404) {
    return NextResponse.redirect(req.nextUrl.origin)
  }

  // convert data to Json
  const dataToJson = await data.json()

  // redirect to the url
  if (data?.url) {
    return NextResponse.redirect(new URL(dataToJson.url))
  }
}

// path: src/pages/api/url/[slug].ts
export const config = {
  matcher: '/s/:slug*',
}
