import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import { useParams, useNavigate, Link } from 'react-router-dom';

function PostPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');
  const [keyInput, setKeyInput] = useState('');

  useEffect(() => {
    getPost();
    getComments();
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

  async function getComments() {
    const { data, error } = await supabase
      .from('comments')
      .select('*')
      .eq('post_id', id)
      .order('created_at', { ascending: true });

    if (error) {
      console.log(error);
    } else {
      setComments(data);
    }
  }

  async function upvotePost() {
    const newUpvotes = post.upvotes + 1;

    const { error } = await supabase
      .from('posts')
      .update({ upvotes: newUpvotes })
      .eq('id', id);

    if (error) {
      console.log(error);
    } else {
      setPost({ ...post, upvotes: newUpvotes });
    }
  }

  async function addComment(e) {
    e.preventDefault();

    if (!comment.trim()) return;

    const { error } = await supabase.from('comments').insert([
      {
        post_id: id,
        comment: comment
      }
    ]);

    if (error) {
      console.log(error);
    } else {
      setComment('');
      getComments();
    }
  }

  async function deletePost() {
    if (keyInput !== post.secret_key) {
      alert('Wrong secret key');
      return;
    }

    const { error } = await supabase
      .from('posts')
      .delete()
      .eq('id', id);

    if (error) {
      console.log(error);
    } else {
      navigate('/');
    }
  }

  if (!post) {
    return <p className="page">Loading...</p>;
  }

  return (
    <div className="post-page">
      <p className="time">{new Date(post.created_at).toLocaleString()}</p>

      <span className="badge">{post.category}</span>

      <h1>{post.title}</h1>

      <button onClick={upvotePost}>
        ▲ Upvote {post.upvotes}
      </button>

      <p className="content">{post.content}</p>

      {post.image_url && (
        <img src={post.image_url} alt={post.title} className="post-image" />
      )}

      <div className="edit-delete-box">
        <input
          placeholder="Enter secret key to edit/delete"
          value={keyInput}
          onChange={(e) => setKeyInput(e.target.value)}
        />

        <Link to={`/edit/${post.id}`}>
          <button>Edit Post</button>
        </Link>

        <button onClick={deletePost}>Delete Post</button>
      </div>

      <div className="comments">
        <h2>Comments</h2>

        <form onSubmit={addComment}>
          <input
            placeholder="Leave a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />

          <button type="submit">Add Comment</button>
        </form>

        {comments.map((c) => (
          <div key={c.id} className="comment">
            {c.comment}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostPage;