import React, { useContext } from 'react';
import Post from './Post';
import { PostList as PostListData } from '../store/post-list-store';
import WelcomeMessage from './WelcomeMessage';

function PostList() {
  const { postList, addInitialPosts } = useContext(PostListData);

  const handleGetPostsClick = () => {
    fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then(data => {
        
        const postsWithReactionsAndTags = data.posts.map(post => ({
          ...post,
          reactions: post.reactions || { likes: 0, dislikes: 0 },
          tags: post.tags || [],
        }));
        addInitialPosts(postsWithReactionsAndTags);
      });
  };

  return (
    <>
      {postList.length === 0 && <WelcomeMessage onGetPostsClick={handleGetPostsClick} />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}

export default PostList;
