
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ComedyCardsVideos = () => {
  const [videos, setVideos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = 9;

  useEffect(() => {
    axios
      .get("http://148.251.88.109:8061/api/get-videos")
      .then((response) => {
        console.log("data", response.data);
        setVideos(response.data.result);
      })
      .catch((error) => {
        console.error("Error fetching videos:", error);
      });
  }, []);

  // Pagination logic
  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);
  const totalPages = Math.ceil(videos.length / videosPerPage);

  return (
   
    <div className="p-4">

<div className="flex justify-center mt-6 mb-6">
  <img
    src="/deep.gif"
    alt="Khadoo Comedies Logo"
    className="h-[150px] w-auto"
  />
</div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentVideos.map((video) => (
          <div
            key={video.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={video.imgurl}
              alt={video.name}
              className="w-full h-65 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{video.name}</h2>
              {/* <p className="text-sm text-gray-600 mb-2">By: {video.partner}</p> */}
              <Link
                to={`/video/${video.id}`}
                state={{ video }}
                className="text-blue-500 hover:underline text-sm"
              >
                Watch Video
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-6 gap-4 items-center">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
        >
          Prev
        </button>
        <span className="text-lg font-medium">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ComedyCardsVideos;
