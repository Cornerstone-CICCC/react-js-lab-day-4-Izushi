import { create } from "zustand"
import type { BlogPost } from "../types"
import { persist } from "zustand/middleware"
import { v4 as uuidv4 } from "uuid"

type BlogStoreState = {
  posts: BlogPost[]
  addPost: (post: Omit<BlogPost, 'id'>) => void
  getPost: (id: string) => BlogPost | null
  updatePost: (id: string, postData: Partial<BlogPost>) => void
  deletePost: (id: string) => void
}

export const useBlogStore = create<BlogStoreState>()(
  persist(
    (set, get) => ({
      posts: [],
      addPost: (post) => {
        const newPost = { ...post, id: uuidv4() }
        set((state) => ({ posts: [...state.posts, newPost] }))
      },
      getPost: (id) => {
        return get().posts.find((post) => post.id === id) || null
      },
      updatePost: (id, postData) => {
        set((state) => ({
          posts: state.posts.map((post) =>
            post.id === id ? { ...post, ...postData } : post
          )
        }))
      },
      deletePost: (id) => {
        set((state) => ({
          posts: state.posts.filter((post) => post.id !== id)
        }))
      }
    }),
    {
      name: "blog-storage"
    }
  )
)