import React, { useRef , useContext } from "react";
import { IoIosSend } from "react-icons/io";
import{ PostList }from "../store/post-list-store";
function CreatePost() {
  const {addPost} = useContext(PostList)
  const userIdElement = useRef();
  const titleElement = useRef();
  const bodyElement = useRef();
  const tagsElement = useRef();
  const reactionsElement = useRef();

const handleSubmit = (event) => {
       event.preventDefault();
       const userId = userIdElement.current.value;
       const title = titleElement.current.value;
       const body = bodyElement.current.value;
       const tags = tagsElement.current.value.split(' ');
       const reactions = reactionsElement.current.value;

      userIdElement.current.value = "";
      titleElement.current.value = "";
      bodyElement.current.value = "";
      tagsElement.current.value = "";
      reactionsElement.current.value = "";

       addPost(userId, title, body, tags, reactions)
}

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div class="mb-3">
        <label htmlFor="userId" class="form-label">
          User Id
        </label>
        <input
          type="text"
          ref={userIdElement}
          class="form-control"
          id="userId"
          placeholder="Enter your user Id here ..."
        />
      </div>

      <div class="mb-3">
        <label htmlFor="title" class="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={titleElement}
          class="form-control"
          id="title"
          placeholder="How are you feeling today ..."
        />
      </div>

      <div class="mb-3">
        <label htmlFor="body" class="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          ref={bodyElement}
          rows={4}
          class="form-control"
          id="body"
          placeholder="Describe your day here ..."
        />
      </div>
      <div class="mb-3">
        <label htmlFor="tags" class="form-label">
          Post Tags
        </label>
        <input
          type="text"
          ref={tagsElement}
          class="form-control"
          id="tags"
          placeholder="Enter your tags here with spaces ..."
        />
      </div>
      <div class="mb-3">
        <label htmlFor="reactions" class="form-label">
          Number of Reactions
        </label>
        <input
          type="number"
          ref={reactionsElement}
          class="form-control"
          id="reactions"
          placeholder="How many people are reacting on it ..."
        />
      </div>

      <button type="submit" class="btn btn-primary">
        Post <IoIosSend />
      </button>
    </form>
  );
}

export default CreatePost;
