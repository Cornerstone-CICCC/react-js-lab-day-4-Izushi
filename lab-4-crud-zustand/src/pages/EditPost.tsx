import { useParams, useNavigate } from 'react-router-dom'
import BlogForm from '../components/BlogForm'
import toast from 'react-hot-toast'
import { useBlogStore } from '../stores/blog.store'
import type { BlogPost } from '../types'

const EditPost = () => {
  const { id } = useParams<{ id: string }>()
  const { posts, updatePost } = useBlogStore()
  const navigate = useNavigate()

  const post = posts.find(p => p.id === id)

  if (!post) {
    return <div className="mb-8">Post not found</div>
  }

  const handleSubmit = (data: Omit<BlogPost, 'id'>) => {
    updatePost(post.id, data)
    toast.success('Post updated successfully')
    navigate(`/blog/${post.id}`)
  }

  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Edit Post</h1>
      <BlogForm
        initialValues={post}
        onSubmit={handleSubmit}
        buttonText="Update Post"
      />
    </div>
  )
}

export default EditPost