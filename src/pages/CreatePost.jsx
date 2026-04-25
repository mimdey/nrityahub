import { useState } from 'react';
import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom';

function CreatePost() {
  const navigate = useNavigate();

  const [post, setPost] = useState({
    title: '',
    content: '',
    image_url: '',
    category: 'Question',
    secret_key: ''
  });

  function handleChange(e) {
    setPost({ ...post, [e.target.name]: e.target.value });
  }

  async function createPost(e) {
    e.preventDefault();

    if (!post.title) {
      alert('Title is required');
      return;
    }

    const { error } = await supabase.from('posts').insert([post]);

    if (error) {
      console.log(error);
      alert('Post was not created. Check Supabase.');
    } else {
      navigate('/');
    }
  }

  return (
    <div className="form-page">
      <h1>Create a Bharatanatyam Post</h1>

      <form onSubmit={createPost} className="form">
        <input
          name="title"
          placeholder="Post title"
          value={post.title}
          onChange={handleChange}
          required
        />

        <textarea
          name="content"
          placeholder="Write your post..."
          value={post.content}
          onChange={handleChange}
        />

        <input
          name="image_url"
          placeholder="Image URL"
          value={post.image_url}
          onChange={handleChange}
        />

        <select name="category" value={post.category} onChange={handleChange}>
          <option>Question</option>
          <option>Performance</option>
          <option>Mudra</option>
          <option>Costume</option>
          <option>Music</option>
          <option>History</option>
          <option>Opinion</option>
        </select>

        <input
          name="secret_key"
          placeholder="Secret key for editing/deleting"
          value={post.secret_key}
          onChange={handleChange}
        />

        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}

export default CreatePost;