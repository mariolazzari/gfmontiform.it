import { VideoPlayer } from "@/components/VideoPlayer";
import { videos } from "@/db/videos";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Video",
  alternates: {
    canonical: "/videos",
  },
};

function VideosPage() {
  return (
    <div className="flex flex-col gap-8 items-center">
      <h2 className="text-4xl font-semibold">I nostri video</h2>
      <div className="flex justify-center items-start gap-16 flex-wrap">
        {videos.map(video => (
          <VideoPlayer key={video} url={video} />
        ))}
      </div>
    </div>
  );
}

export default VideosPage;
