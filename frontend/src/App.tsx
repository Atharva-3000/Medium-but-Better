import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"
import Blog from "./pages/Blog"
import {Blogs} from "./pages/Blogs"
import { Toaster } from "react-hot-toast"
import { Publish } from "./pages/Publish"

function App() {
  return (
    <>
    <Toaster/>
      <Router>
        <Routes>
          <Route path="/" element={<Signup/>}/>
          <Route path="signin" element={<Signin/>}/>
          <Route path="/blog/:id" element={<Blog/>}/>
          <Route path="/blogs" element={<Blogs/>}/>
          <Route path="/publish" element={<Publish/>}/>
        
        </Routes>
      </Router>
    </>
  )
}

export default App
