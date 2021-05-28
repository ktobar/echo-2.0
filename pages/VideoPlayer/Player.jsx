import ReactPlayer from "react-player";

export default function VideoPlayer(props) {
  const { videoInfo, setVideoInfo } = props;

  return (
    <div className="video-player">
      <ReactPlayer url={videoInfo.videoId} />
    </div>
  );
}
