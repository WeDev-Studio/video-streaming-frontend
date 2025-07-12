"use client";

import PageLayout from "@/components/layout/PageLayout";
import VideoPlayer from "@/components/watch/VideoPlayer";
import VideoMeta from "@/components/watch/VideoMeta";
import VideoControls from "@/components/watch/VideoControls";

interface WatchPageProps {
  params: { id: string };
}

// Dummy video for now
const dummyVideo = {
  id: "1",
  title: "AI-Powered Music Composition: The Future of Sound",
  description: `Explore how artificial intelligence is transforming music production. This video demonstrates real-world applications of AI tools in composing, arranging, and enhancing soundtracks.`,
  views: "271K views",
  uploaded: "2 days ago",
  src: "https://www.w3schools.com/html/mov_bbb.mp4",
};

const WatchPage = ({ params }: WatchPageProps) => {
  return (
    <PageLayout>
      <div className="flex flex-col px-4 py-6 max-w-5xl mx-auto text-white">
        <VideoPlayer src={dummyVideo.src} />
        <VideoMeta
          title={dummyVideo.title}
          views={dummyVideo.views}
          uploaded={dummyVideo.uploaded}
        />
        <VideoControls />
        <p className="mt-4 text-sm text-gray-300 whitespace-pre-line">
          {dummyVideo.description}
        </p>
      </div>
    </PageLayout>
  );
};

export default WatchPage;
