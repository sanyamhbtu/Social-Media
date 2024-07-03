import React, { useReducer, createContext } from 'react';

// Create context for post list
export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {}
});

// Define the initial post list
const DEFAULT_POST_LIST = [
  {
    id: '1',
    title: 'Going to Goa',
    body: 'Hello, I am Sanyam Jain going to Goa for some fun, come and join me there! Good wishes.',
    reactions: '7',
    userId: 'sanyam@hbtu',
    tags: ['Goa', 'Masti', 'selfLove']
  },
  {
    id: '2',
    title: 'Going for Internship',
    body: 'Hello, I am Sanyam Jain going to Hyderabad for an internship at JP Morgan. Come and join me there! Good wishes.',
    reactions: '56',
    userId: 'sanyam@intern',
    tags: ['Intern', 'Hyderabad', 'JP Morgan']
  }
];

// Reducer function to handle post list actions
const postListReducer = (currPostList, action) => {
   let newPostList = currPostList;
  switch (action.type) {
    case 'DELETE_POST':
      return newPostList = currPostList.filter(post => post.id !== action.payload.postId);
      case 'ADD_POST':
        return newPostList = [action.payload , ...currPostList]
    default:
      return newPostList;
  }
};

// Provider component for post list context
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

  const addPost = (userId, title, body, tags, reactions) => {
    dispatchPostList({
      type: 'ADD_POST',
      payload: {
        id: Date.now(),
        title: title,
        body: body,
        reactions: reactions,
        userId: userId,
        tags: tags,
    }});
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
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
