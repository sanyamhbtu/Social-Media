import React, { useContext } from "react";
import { FcDeleteRow } from "react-icons/fc";
import { PostList } from "../store/post-list-store";

function Post({ post }) {
  const { deletePost } = useContext(PostList);

  return (
    <div className="card post-card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {post.reactions}+
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-info hashtag">
            #{tag}
          </span>
        ))}
        <div
          className="alert alert-success d-flex align-items-center reaction"
          role="alert"
        >
          <div>{`This message is seen by ${post.reactions}`}</div>
        </div>
      </div>
      <span className="position-absolute bottom-0 start-100 translate-middle badge rounded-pill large-span pointer">
        <FcDeleteRow onClick={() => deletePost(post.id)} style={{ cursor: "pointer" }} />
      </span>
    </div>
  );
}

export default Post;
