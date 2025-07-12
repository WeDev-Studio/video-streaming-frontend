"use client";

import FilterBar from "../controls/FilterBar";
import VideoCard from "./VideoCard";
import { useState } from "react";

const dummyVideos = [
  {
    id: "1",
    title: "Gaming Highlights 2025",
    thumbnail: "/fallback-thumbnail.svg",
    views: "3.2K views",
    uploaded: "2 days ago",
    category: "Gaming",
  },
  {
    id: "2",
    title: "Top Music Tracks This Week",
    thumbnail: "/fallback-thumbnail.svg",
    views: "1.1K views",
    uploaded: "1 day ago",
    category: "Music",
  },
  {
    id: "3",
    title: "AI in 2025 - What's Changed?",
    thumbnail: "/fallback-thumbnail.svg",
    views: "900 views",
    uploaded: "3 days ago",
    category: "News",
  },
  {
    id: "4",
    title: "Podcast: Hardware Trends",
    thumbnail: "/fallback-thumbnail.svg",
    views: "2.5K views",
    uploaded: "4 days ago",
    category: "Podcasts",
  },
  {
    id: "5",
    title: "Epic Gaming Fail Compilation",
    thumbnail: "/fallback-thumbnail.svg",
    views: "1.9K views",
    uploaded: "5 days ago",
    category: "Gaming",
  },
  {
    id: "6",
    title: "Lo-fi Alternative Beats",
    thumbnail: "/fallback-thumbnail.svg",
    views: "740 views",
    uploaded: "6 days ago",
    category: "Alternative",
  },
];

const categories = [
  "All",
  "Gaming",
  "Music",
  "News",
  "Podcasts",
  "Alternative",
];

const VideoGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredVideos =
    selectedCategory === "All"
      ? dummyVideos
      : dummyVideos.filter((v) => v.category === selectedCategory);

  return (
    <>
      <FilterBar
        categories={categories}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-4">
        {filteredVideos.map((video) => (
          <VideoCard key={video.id} {...video} />
        ))}
      </div>
    </>
  );
};

export default VideoGrid;
