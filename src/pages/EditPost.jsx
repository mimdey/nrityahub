import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import { useParams, useNavigate } from 'react-router-dom';

function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState({
    title: '',
    content: '',
    image_url: '',
    category: 'Question',
    secret_key: ''
  });

  const [keyInput, setKeyInput] = useState('');

  useEffect(() => {
    getPost();
  }, []);

  async function getPost() {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.log(error);
    } else {
      setPost(data);
    }
  }

  function handleChange(e) {
    setPost({ ...post, [e.target.name]: e.target.value });
  }

  async function updatePost(e) {
    e.preventDefault();

    if (keyInput !== post.secret_key) {
      alert('Wrong secret key');
      return;
    }

    const { error } = await supabase
      .from('posts')
      .update({
        title: post.title,
        content: post.content,
        image_url: post.image_url,
        category: post.category
      })
      .eq('id', id);

    if (error) {
      console.log(error);
      alert('Post was not updated.');
    } else {
      navigate(`/post/${id}`);
    }
  }

  return (
    <div className="form-page">
      <h1>Edit Bharatanatyam Post</h1>

      <form onSubmit={updatePost} className="form">
        <input
          placeholder="Enter secret key to save changes"
          value={keyInput}
          onChange={(e) => setKeyInput(e.target.value)}
        />

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

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default EditPost;