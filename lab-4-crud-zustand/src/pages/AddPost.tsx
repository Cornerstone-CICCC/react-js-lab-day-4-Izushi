import { useNavigate } from 'react-router-dom'
import BlogForm from '../components/BlogForm'
import toast from 'react-hot-toast'
import type { BlogPost } from '../types'
import { useBlogStore } from '../stores/blog.store'

const AddPost = () => {
  const { addPost } = useBlogStore()
  const navigate = useNavigate()

  const handleSubmit = (data: Omit<BlogPost, 'id'>) => {
    addPost(data)
    toast.success('Post created successfully')
    navigate('/blog')
  }

  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Create New Post</h1>
      <BlogForm onSubmit={handleSubmit} buttonText="Create Post" />
    </div>
  )
}

export default AddPost