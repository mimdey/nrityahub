import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import PostCard from '../components/PostCard';

function Home() {
  const [posts, setPosts] = useState([]);
  const [sortBy, setSortBy] = useState('created_at');
  const [search, setSearch] = useState('');

  useEffect(() => {
    getPosts();
  }, [sortBy]);

  async function getPosts() {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .order(sortBy, { ascending: false });

    if (error) {
      console.log(error);
    } else {
      setPosts(data);
    }
  }

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page">
      <section className="hero">
        <h1>NrityaHub</h1>
        <p>Where rhythm meets expression, and every movement tells a story.</p>
      </section>

      <div className="controls">
        <input
          placeholder="Search posts by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button onClick={() => setSortBy('created_at')}>Newest</button>
        <button onClick={() => setSortBy('upvotes')}>Most Upvoted</button>
      </div>

      <div className="feed">
        {filteredPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Home;