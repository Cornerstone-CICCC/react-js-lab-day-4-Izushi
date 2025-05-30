import { useParams, useNavigate, Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import { PencilLine, Trash2 } from 'lucide-react'
import { useBlogStore } from '../stores/blog.store'

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>()
  const { posts, deletePost } = useBlogStore()
  const navigate = useNavigate()

  const post = posts.find(p => p.id === id)

  if (!post) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Article not found</h2>
        <Link
          to="/blog"
          className="px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
        >
          Back to Blog List
        </Link>
      </div>
    )
  }

  const handleDelete = () => {
    deletePost(post.id)
    toast.success('Article deleted successfully')
    navigate('/blog')
  }

  return (
    <article className="max-w-3xl mx-auto">
      <header className="mb-8">
        <div className="flex items-center">
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
            post.published
              ? 'bg-green-100 text-green-800'
              : 'bg-yellow-100 text-yellow-800'
          }`}>
            {post.published ? 'Published' : 'Draft'}
          </span>
        </div>
        <h2 className="text-3xl font-bold text-gray-800 my-4">{post.title}</h2>
      </header>

      <div className="prose prose-indigo max-w-none mb-8 whitespace-pre-wrap">
        {post.content}
      </div>

      <div className="flex flex-wrap justify-end gap-3">
        <Link
          to={`/blog/edit/${post.id}`}
          className="px-4 py-2 text-blue-500 hover:text-blue-300 transition-colors font-medium"
        >
          <PencilLine />
        </Link>

        <button
          onClick={handleDelete}
          className="px-4 py-2 text-red-500 hover:text-red-300 transition-colors font-medium cursor-pointer"
        >
          <Trash2 />
        </button>
      </div>
    </article>
  )
}

export default BlogDetail