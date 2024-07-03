import React, { useContext } from 'react';
import { FcDeleteRow } from 'react-icons/fc';
import { PostList } from '../store/post-list-store';
import { AiTwotoneLike } from "react-icons/ai";

function Post({ post }) {
  const { deletePost } = useContext(PostList);

  const tags = post.tags || [];

  const reactionsText = `Likes: ${post.reactions.likes}, Dislikes: ${post.reactions.dislikes}`;

  return (
    
    <div className="card post-card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {post.reactions.likes + post.reactions.dislikes}+
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {tags.map((tag) => (
          <span key={tag} className="badge text-bg-info hashtag">
            {tag}
          </span>
        ))}
        <div
          className="alert alert-success d-flex align-items-center reaction"
          role="alert"
        >
          <div>{`This message is seen by ${reactionsText}`}</div>
        </div>
      </div>
      <span className="position-absolute bottom-0 start-100 translate-middle badge rounded-pill large-span pointer">
        <FcDeleteRow
          onClick={() => deletePost(post.id)}
          style={{ cursor: "pointer" }}
        />
      </span>
    </div>
    
  );

}

export default Post;
