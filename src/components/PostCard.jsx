import { Link } from 'react-router-dom';

function PostCard({ post }) {
  return (
    <Link to={`/post/${post.id}`} className="post-card">
      <p className="time">{new Date(post.created_at).toLocaleString()}</p>
      <h2>{post.title}</h2>
     <span className={`badge ${post.category.toLowerCase()}`}>
  {post.category}
</span>
      <p>▲ {post.upvotes} upvotes</p>
    </Link>
  );
}

export default PostCard;