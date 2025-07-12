interface VideoMetaProps {
  title: string;
  views: string;
  uploaded: string;
}

const VideoMeta = ({ title, views, uploaded }: VideoMetaProps) => {
  return (
    <div className="mt-4">
      <h1 className="text-xl font-semibold">{title}</h1>
      <p className="text-sm text-gray-400 mt-1">
        {views} • {uploaded}
      </p>
    </div>
  );
};

export default VideoMeta;
