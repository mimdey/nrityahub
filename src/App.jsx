import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import PostPage from './pages/PostPage';
import EditPost from './pages/EditPost';
import './index.css';

function App() {
  return (
    <BrowserRouter>
    <nav className="navbar">
  <Link to="/" className="logo">NrityaHub</Link>

  <div className="nav-right">
    <Link to="/create" className="nav-button">Create Post</Link>
  </div>
</nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/edit/:id" element={<EditPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;