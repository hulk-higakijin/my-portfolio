import { Blog } from '../../types/Blog'
import prisma from '../../lib/prisma'
import { GetServerSideProps } from 'next'
import { useState } from 'react'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id: any = context.query.id // anyを使うのはあまり良くない。
  const data = await prisma.blog.findUnique({
    where: { id: id },
  })
  const blog = JSON.parse(JSON.stringify(data))
  return { props: { blog } }
}

const BlogsId = (props: { blog: Blog }) => {
  const [blog, setBlog] = useState<Blog>(props.blog)
  return (
    <>
      <div className="max-w-4xl mx-auto flex flex-col gap-4 p-4">
        <h1 className="text-blue-500 text-2xl font-bold">{blog.title}</h1>
        <p>{blog.body}</p>
      </div>
    </>
  )
}

export default BlogsId
