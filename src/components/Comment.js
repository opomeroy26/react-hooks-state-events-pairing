import React from "react";

function Comment({ comment }) {
  return (
    <div>
      <div>
        <h4>{comment.user}</h4>
        <h5>{comment.comment}</h5>
      </div>
    </div>
  );
}

export default Comment;