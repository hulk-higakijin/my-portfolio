import type { NextApiRequest, NextApiResponse } from 'next'
import { Blog } from '../../types/Blog'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Blog[]>
) {
  res.status(200).json([
    { title: 'hello, my world.', body: 'this is a beautiful world.', createdAt: 'today' },
    { title: 'hogehoge', body: 'higakijin', createdAt: 'today' },
  ])
}
