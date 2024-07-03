import React, { useReducer, createContext } from 'react';

// Create context for post list
export const PostList = createContext({
  postList: [],
  addPost: () => {},
  addInitialPosts: () => {},
  deletePost: () => {}
});

const postListReducer = (currPostList, action) => {
  switch (action.type) {
    case 'DELETE_POST':
      return currPostList.filter(post => post.id !== action.payload.postId);
    case 'ADD_POST':
      return [action.payload, ...currPostList];
    case 'ADD_INITIAL_POSTS':
      return [...action.payload, ...currPostList];
    default:
      return currPostList;
  }
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (userId, title, body, tags = [], reactions = { likes: 0, dislikes: 0 }) => {
    dispatchPostList({
      type: 'ADD_POST',
      payload: {
        id: Date.now(),
        title: title,
        body: body,
        reactions: reactions,
        userId: userId,
        tags: tags,
      }
    });
  };

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: 'ADD_INITIAL_POSTS',
      payload: posts,
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: 'DELETE_POST',
      payload: {
        postId,
      }
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost, addInitialPosts }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
