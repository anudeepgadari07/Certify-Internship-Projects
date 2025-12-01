import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import VideoCard from "../components/VideoCard";
import "./Home.css";

function Home() {
  const [videos, setVideos] = useState([]);
  const query = new URLSearchParams(useLocation().search).get("search");

  useEffect(() => {
    const fetchVideos = async () => {
      const endpoint = query
        ? `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&maxResults=20&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
        : `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&regionCode=IN&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;

      const { data } = await axios.get(endpoint);
      setVideos(data.items);
    };
    fetchVideos();
  }, [query]);

  return (
    <div className="home">
      {videos.map((video) => (
        <VideoCard key={video.id.videoId || video.id} video={video} />
      ))}
    </div>
  );
}

export default Home;
