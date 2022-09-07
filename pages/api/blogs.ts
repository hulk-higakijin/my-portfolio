import type { NextApiRequest, NextApiResponse } from 'next'
import type { Blog } from '../../types/Blog'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Blog[]>
) {
  res.status(200).json([
    { id: '1', title: 'hello, my world.', body: 'this is a beautiful world.', createdAt: 'today' },
    { id: '1', title: 'hogehoge', body: 'higakijin', createdAt: 'today' },
  ])
}
