import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import rateLimit from 'express-rate-limit'

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
})

export function rateLimitMiddleware(request: NextRequest) {
  return new Promise((resolve, reject) => {
    limiter(request, {} as any, (result: any) => {
      if (result instanceof Error) {
        reject(result)
      } else {
        resolve(NextResponse.next())
      }
    })
  })
}