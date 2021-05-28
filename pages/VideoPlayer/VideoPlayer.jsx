import { useState } from 'react'

import Player from './Player'

export default function VideoPlayer(props) {

  const [videoInfo, setVideoInfo] = useState(
    {
      videoId: "https://www.youtube.com/watch?v=mQM8mnHYFHU",
      duration: null,
      startTime: 0,
      endTime: 0
    }
  );

  return (
    <div className="video-player">
      <Player videoInfo={videoInfo} setVideoInfo={setVideoInfo}/>
    </div>
  );
};
