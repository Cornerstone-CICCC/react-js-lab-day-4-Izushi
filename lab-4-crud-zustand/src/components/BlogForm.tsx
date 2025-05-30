import { useState, type FormEvent } from 'react'
import type { BlogPost } from '../types'

type BlogFormProps = {
  initialValues?: Partial<BlogPost>
  onSubmit: (data: Omit<BlogPost, 'id'>) => void
  buttonText: string
}

const BlogForm = ({ initialValues, onSubmit, buttonText }: BlogFormProps) => {
  const [title, setTitle] = useState(initialValues?.title || '')
  const [content, setContent] = useState(initialValues?.content || '')
  const [published, setPublished] = useState(initialValues?.published || false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ title, content, published })
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">
          Title
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm"
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">
          Content
        </label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          rows={10}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm"
        />
      </div>

      <div className="mb-6">
        <label className="flex items-center cursor-pointer">
          <div className="relative">
            <input
              type="checkbox"
              checked={published}
              onChange={() => setPublished(!published)}
              className="sr-only"
            />
            <div className={`block w-10 h-6 rounded-full transition-colors ${published ? 'bg-indigo-600' : 'bg-gray-300'}`}></div>
            <div className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${published ? 'transform translate-x-4' : ''}`}></div>
          </div>
          <span className="ml-3 text-gray-700">Publish</span>
        </label>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-lg shadow hover:bg-indigo-700 focus:outline-none transition-colors cursor-pointer"
        >
          {buttonText}
        </button>
      </div>
    </form>
  )
}

export default BlogForm