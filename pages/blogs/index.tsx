import { useEffect, useState } from 'react'
import prisma from '../../lib/prisma'
import type { Blog, Blogs } from '../../types/Blog'
import { format } from '../../lib/format'
import Link from 'next/link'
import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await prisma.blog.findMany()
  const blogs = JSON.parse(JSON.stringify(data))
  return { props: { blogs } }
}

const Blogs = (props: { blogs: Blogs }) => {
  const [blogs, setBlogs] = useState<Blog[]>([...props.blogs].reverse())

  return (
    <>
      <div className="max-w-4xl mx-auto flex flex-col gap-4">
        <h1 className="text-xl font-bold border-b">Blogs</h1>

        {blogs.map((blog: Blog, i: number) => (
          <Link href={`/blogs/${blog.id}`} key={i}>
            <div className="border-b p-4 cursor-pointer">
              <div className="flex">
                <h2 className="text-blue-500 text-xl font-bold">
                  {blog.title}
                </h2>
                <p className="ml-auto text-sm">{format(blog.createdAt)}</p>
              </div>
              <p>{blog.body}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default Blogs
