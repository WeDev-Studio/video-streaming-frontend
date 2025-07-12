// import { FaThumbsUp, FaShare, FaExpand } from "react-icons/fa";
"use client";

const VideoControls = () => {
  return (
    <div className="mt-4 flex gap-4 items-center text-sm text-white">
      <button className="flex items-center gap-2 hover:text-gray-300">
        {/* <FaThumbsUp /> */}
        Like
      </button>
      <button className="flex items-center gap-2 hover:text-gray-300">
        {/* <FaShare /> */}
        Share
      </button>
      <button
        className="flex items-center gap-2 hover:text-gray-300 ml-auto"
        onClick={() => {
          const video = document.querySelector("video");
          if (video?.requestFullscreen) video.requestFullscreen();
        }}
      >
        {/* <FaExpand /> */}
        Fullscreen
      </button>
    </div>
  );
};

export default VideoControls;
