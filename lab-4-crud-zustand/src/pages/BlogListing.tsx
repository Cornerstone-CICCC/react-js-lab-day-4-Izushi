import { Link } from 'react-router-dom'
import { SquarePen } from 'lucide-react'
import { useBlogStore } from '../stores/blog.store'

const BlogListing = () => {
  const { posts } = useBlogStore()

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Blog Posts</h1>
        <Link
          to="/blog/new"
          className="text-blue-500 hover:text-blue-300 transition-colors font-medium py-2 px-4"
        >
          <SquarePen className="inline-block mr-2" />
        </Link>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-600 mb-4">Not found posts. Create new post.</p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map(post => (
            <div key={post.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-5">
                <Link
                  to={`/blog/${post.id}`}
                >
                  <div className="flex justify-between items-center">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      post.published
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {post.published ? 'Published' : 'Draft'}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold my-2 text-gray-800">
                      {post.title}
                  </h2>
                  <p className="text-gray-600 line-clamp-3">{post.content}</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default BlogListing