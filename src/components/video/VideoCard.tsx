import Link from "next/link";
import { useState } from "react";

interface VideoCardProps {
  id: string;
  title: string;
  thumbnail: string;
  views: string;
  uploaded: string;
}

const VideoCard = ({
  id,
  title,
  thumbnail,
  views,
  uploaded,
}: VideoCardProps) => {
  const [imgSrc] = useState(thumbnail);

  return (
    <Link href={`/watch/${id}`}>
      <div className="cursor-pointer text-white">
        <img
          src={imgSrc}
          alt={title}
          className="w-full rounded-lg aspect-video object-cover mb-2 bg-zinc-800"
        />
        <div>
          <h3 className="text-sm font-semibold line-clamp-2">{title}</h3>
          <p className="text-xs text-gray-400">
            {views} • {uploaded}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
