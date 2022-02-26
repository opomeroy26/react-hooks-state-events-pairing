import React from "react";

function VideoInfo({
  handleUpLikeClick,
  handleDownLikeClick,
  handleHideComments,
  upLikeCount,
  downLikeCount,
}) {
  return (
    <div>
      <button name="+" onClick={handleUpLikeClick}>
        {upLikeCount}👍
      </button>
      <button name="-" onClick={handleDownLikeClick}>
        {downLikeCount}👎
      </button>

      <br />

      <button onClick={handleHideComments}>Hide Comments</button>
    </div>
  );
}

export default VideoInfo;