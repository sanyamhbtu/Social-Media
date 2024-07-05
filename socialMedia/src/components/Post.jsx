import React, { useContext } from 'react';
import { FcDeleteRow } from 'react-icons/fc';
import { PostList } from '../store/post-list-store';
import { AiFillDelete } from "react-icons/ai";

function Post({ post }) {
  const { deletePost } = useContext(PostList);
  const tags = Array.isArray(post.reactions) ? post.reactions : [];


  return (
    
    <div className="card post-card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
          style={{ cursor: "pointer" }}
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <AiFillDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {tags.map((tag, index) => (
            <span key={index} className="badge bg-info text-dark me-1">
              {tag}
            </span>
          ))}
        <div
          className="alert alert-success d-flex align-items-center reaction"
          role="alert"
        >
          <div>{`This message is seen by ${post.views } people`}</div>
        </div>
      </div>
      
    </div>
    
  );

}

export default Post;
