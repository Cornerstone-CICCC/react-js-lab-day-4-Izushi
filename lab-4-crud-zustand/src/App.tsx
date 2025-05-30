import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import BlogListing from './pages/BlogListing'
import BlogDetail from './pages/BlogDetail'
import AddPost from './pages/AddPost'
import EditPost from './pages/EditPost'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Toaster />
        <Header />
        <main className="flex-1 container mx-auto px-4 py-8 max-w-6xl">
          <div className="bg-white shadow-md rounded-lg p-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<BlogListing />} />
              <Route path="/blog/:id" element={<BlogDetail />} />
              <Route path="/blog/new" element={<AddPost />} />
              <Route path="/blog/edit/:id" element={<EditPost />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App