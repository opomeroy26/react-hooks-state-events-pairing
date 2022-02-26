import React, { useState } from "react";
import Comment from "./Comment";

function Comments({ video }) {
  const [query, setQuery] = useState("");

  function handleQuery(value) {
    setQuery((query) => (query = value));
  }

  return (
    <>
      <h1>{video.comments.length} Comments</h1>
      <form onChange={(e) => handleQuery(e.target.value)}>
        <label htmlFor="commSearch">Search: </label>
        <input name="commSearch" type="text"></input>
      </form>
      <ul>
        {video.comments
          .filter(
            (comment) =>
              comment.comment.includes(query) || comment.user.includes(query)
          )
          .map((comment) => {
            return <Comment key={comment.id} comment={comment} />;
          })}
      </ul>
    </>
  );
}

export default Comments;