
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import axios from "axios";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const VideoPlayerPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [allVideos, setAllVideos] = useState([]);
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://backendhausa.onrender.com/api/get-videos")
      .then((res) => {
        const videos = res.data.result || [];
        setAllVideos(videos);

        if (id === "local") {
          setVideo({
            id: "local",
            name: "Hero Comedy Special",
            partner: "Local Partner",
            vurl: "/videos/funnyvideo.mp4",
          });
        } else {
          const matched = videos.find((v) => String(v.id) === String(id));
          setVideo(matched || null);
        }

        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch videos:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p className="p-4">Loading video...</p>;
  }

  if (!video) {
    return <p className="p-4 text-red-600">No video found for ID: {id}</p>;
  }

  const similarVideos = allVideos
    .filter((v) => String(v.id) !== String(video.id))
    .slice(0, 6);

  return (
    <>
      <Navbar />
      <div className="p-4 max-w-screen-lg mx-auto">
        {/* Back Button Top-Right */}
        <div className="flex justify-end mb-4">
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-700"
          >
            ← Back
          </button>
        </div>

        <h1 className="text-2xl font-bold mb-4">{video.name}</h1>
        <ReactPlayer
          url={video.vurl || video.vurlaws}
          controls
          width="100%"
          height="500px"
        />
      </div>

      {/* Similar Videos */}
      <div className="px-4 py-8 max-w-screen-lg mx-auto">
        <h2 className="text-xl font-bold mb-4 text-[#FF6427]">Similar Videos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {similarVideos.map((vid) => (
            <Link
              to={`/video/${vid.id}`}
              key={vid.id}
              className="bg-white rounded-lg shadow-md overflow-hidden block hover:shadow-lg transition-shadow duration-200"
            >
              <img
                src={vid.imgurl}
                alt={vid.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-3">
                <h3 className="text-lg font-semibold">{vid.name}</h3>
                <p className="text-blue-600 hover:underline text-sm">Watch Video</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default VideoPlayerPage;
 
