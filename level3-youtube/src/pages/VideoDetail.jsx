import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Comments from "../components/Comments";
import "./VideoDetail.css";

function VideoDetail() {
  const { id } = useParams();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    const fetchVideo = async () => {
      const { data } = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${id}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
      );
      setVideo(data.items[0]);
    };
    fetchVideo();
  }, [id]);

  if (!video) return <h2>Loading...</h2>;

  const { title, description, channelTitle } = video.snippet;

  return (
    <div className="video-detail">
      <iframe
        width="100%"
        height="500"
        src={`https://www.youtube.com/embed/${id}`}
        frameBorder="0"
        allowFullScreen
        title={title}
      ></iframe>

      <h2>{title}</h2>
      <p className="channel">{channelTitle}</p>
      <p>{description}</p>

      <div className="buttons">
        <button>👍 Like</button>
        <button>🔁 Share</button>
      </div>

      <Comments />
    </div>
  );
}

export default VideoDetail;
