import { VideoPlayer } from "@/components/VideoPlayer";

function VideosPage() {
  const videos = [
    "https://www.instagram.com/reel/C_arx8ktwC1/?utm_source=ig_web_copy_link",
    "https://www.instagram.com/reel/DEx6QzIMvnc/?utm_source=ig_web_copy_link",
  ];

  return (
    <div className="flex flex-col gap-8 items-center">
      <h2 className="text-4xl font-semibold">I nostri video</h2>
      <div className="flex justify-center items-center gap-16 flex-wrap">
        {videos.map(video => (
          <VideoPlayer key={video} url={video} />
        ))}
      </div>
    </div>
  );
}

export default VideosPage;
