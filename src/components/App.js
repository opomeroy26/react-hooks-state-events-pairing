import video from "../data/video.js";
import React, { useState } from "react";
import Comments from "./Comments";
import VideoInfo from "./VideoInfo";
import VideoHeader from "./VideoHeader";

function App() {
  const [upLikeCount, setUpLikeCount] = useState(video.upvotes);
  const [downLikeCount, setDownLikeCount] = useState(video.downvotes);
  const [commentVis, setCommentVis] = useState(true);

  function handleUpLikeClick() {
    setUpLikeCount((upLikeCount) => upLikeCount + 1);
  }

  function handleDownLikeClick() {
    setDownLikeCount((downLikeCount) => downLikeCount + 1);
  }

  function handleHideComments() {
    setCommentVis((commentVis) => !commentVis);
  }

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />

      <VideoHeader video={video} />

      <VideoInfo
        upLikeCount={upLikeCount}
        downLikeCount={downLikeCount}
        handleUpLikeClick={handleUpLikeClick}
        handleDownLikeClick={handleDownLikeClick}
        handleHideComments={handleHideComments}
      />

      <hr />

      {commentVis && <Comments video={video} />}
    </div>
  );
}

export default App;

