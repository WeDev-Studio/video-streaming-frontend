interface VideoPlayerProps {
  src: string;
}

const VideoPlayer = ({ src }: VideoPlayerProps) => {
  return (
    <div className="w-full aspect-video bg-black rounded-lg overflow-hidden">
      <video src={src} controls className="w-full h-full object-contain" />
    </div>
  );
};

export default VideoPlayer;
