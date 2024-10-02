import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import Tokens from 'csrf'

const tokens = new Tokens()

export function csrfMiddleware(request: NextRequest) {
  const response = NextResponse.next()

  if (request.method === 'GET') {
    const secret = tokens.secretSync()
    const token = tokens.create(secret)
    response.cookies.set('csrfSecret', secret, { httpOnly: true })
    response.headers.set('X-CSRF-Token', token)
  } else if (['POST', 'PUT', 'DELETE', 'PATCH'].includes(request.method)) {
    const secret = request.cookies.get('csrfSecret')?.value
    const token = request.headers.get('X-CSRF-Token')

    if (!secret || !token || !tokens.verify(secret, token)) {
      return new NextResponse('Invalid CSRF token', { status: 403 })
    }
  }

  return response
}