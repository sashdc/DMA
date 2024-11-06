// components/InstagramFeed.js
import { useEffect, useState } from 'react';
import styles from './InstagramFeed.module.css';

const InstagramFeed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        const response = await fetch('/api/instagram');
        
        // Check if response is OK and parse JSON
        if (!response.ok) {
          console.error('Failed to fetch posts:', response.statusText);
          return;
        }
        
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching Instagram posts:', error);
      }
    };

    fetchInstagramPosts();
  }, []);

  return (
    <div className={styles.grid}>
      {posts.length > 0 ? (
        posts.map((post) => (
          <a key={post.id} href={post.permalink} target="_blank" rel="noopener noreferrer">
            <img src={post.media_url} alt={post.caption || 'Instagram post'} className={styles.image} />
          </a>
        ))
      ) : (
        <p>No posts available</p>
      )}
    </div>
  );
};

export default InstagramFeed;
