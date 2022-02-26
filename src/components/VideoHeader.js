import React from "react";

function VideoHeader({ video }) {
  return (
    <>
      <header>{video.title}</header>
      <div>
        <p>
          {video.views} Views | Uploaded {video.createdAt}
        </p>
      </div>
    </>
  );
}

export default VideoHeader;
