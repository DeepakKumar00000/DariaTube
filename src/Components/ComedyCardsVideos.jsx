
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const ComedyCardsVideos = () => {
//   const [videos, setVideos] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const videosPerPage = 9;

//   useEffect(() => {
//     axios
//       .get("https://backendhausa.onrender.com/api/get-videos")
//       .then((response) => {
//         console.log("data", response.data);
//         setVideos(response.data.result);
//       })
//       .catch((error) => {
//         console.error("Error fetching videos:", error);
//       });
//   }, []);

//   // Pagination logic
//   const indexOfLastVideo = currentPage * videosPerPage;
//   const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
//   const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);
//   const totalPages = Math.ceil(videos.length / videosPerPage);

//   return (
   
//     <div className="p-4">

// <div className="flex justify-center mt-6 mb-6">
//   <img
//     src="/deep.gif"
//     alt="Khadoo Comedies Logo"
//     className="h-[150px] w-auto"
//   />
// </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {currentVideos.map((video) => (
//           <div
//             key={video.id}
//             className="bg-white rounded-lg shadow-md overflow-hidden"
//           >
//             <img
//               src={video.imgurl}
//               alt={video.name}
//               className="w-full h-65 object-cover"
//             />
//             <div className="p-4">
//               <h2 className="text-xl font-semibold mb-2">{video.name}</h2>
//               {/* <p className="text-sm text-gray-600 mb-2">By: {video.partner}</p> */}
//               <Link
//                 to={`/video/${video.id}`}
//                 state={{ video }}
//                 className="text-blue-500 hover:underline text-sm"
//               >
//                 Watch Video
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Pagination Controls */}
//       <div className="flex justify-center mt-6 gap-4 items-center">
//         <button
//           onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//           disabled={currentPage === 1}
//           className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
//         >
//           Prev
//         </button>
//         <span className="text-lg font-medium">
//           Page {currentPage} of {totalPages}
//         </span>
//         <button
//           onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
//           disabled={currentPage === totalPages}
//           className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ComedyCardsVideos;





import React from "react";
const ComedyCards = () => {
  
  return (
    <div className="grid grid-cols-5 gap-4 p-4">

      {/* Card 1: 60% width (3 out of 5 columns) */}
      <div
        className="relative h-64 bg-cover bg-center rounded-lg overflow-hidden shadow-md col-span-5 md:col-span-3"
        style={{ backgroundImage: "url(https://images.pexels.com/photos/3791983/pexels-photo-3791983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)" }}
      >
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6 text-white">
          {/* <p className="text-sm mb-1">By : Bella Rosse</p> */}
          <h2 className="text-xl font-bold mb-1">Surprise A Show</h2>
          <a href="#" className="text-yellow-400 text-sm font-semibold underline hover:text-yellow-300">
            Read More
          </a>
        </div>
      </div>

      {/* Card 2: 40% width (2 out of 5 columns) */}
      <div
        className="relative h-64 bg-cover bg-center rounded-lg overflow-hidden shadow-md col-span-5 md:col-span-2"
        style={{ backgroundImage: "url(https://images.pexels.com/photos/543/black-and-white-man-person-cigarette.jpg?auto=compress&cs=tinysrgb&w=600)" }}
      >
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6 text-white">
          {/* <p className="text-sm mb-1">By : Kellen Starlight</p> */}
          <h2 className="text-xl font-bold mb-1">Start From Laugh</h2>
          <a href="#" className="text-yellow-400 text-sm font-semibold underline hover:text-yellow-300">
            Read More
          </a>
        </div>
      </div>

      {/* Card 3: 40% width */}
      <div
        className="relative h-64 bg-cover bg-center rounded-lg overflow-hidden shadow-md col-span-5 md:col-span-2"
        style={{ backgroundImage: "url(https://images.pexels.com/photos/3760047/pexels-photo-3760047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)" }}
      >
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6 text-white">
          {/* <p className="text-sm mb-1">By : Mr. Sacobeat</p> */}
          <h2 className="text-xl font-bold mb-1">Evening For Thinking</h2>
          <a href="#" className="text-yellow-400 text-sm font-semibold underline hover:text-yellow-300">
            Read More
          </a>
        </div>
      </div>

      {/* Card 4: 60% width */}
      <div
        className="relative h-64 bg-cover bg-center rounded-lg overflow-hidden shadow-md col-span-5 md:col-span-3"
        style={{ backgroundImage: "url(https://images.pexels.com/photos/10078868/pexels-photo-10078868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)" }}
      >
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6 text-white">
          {/* <p className="text-sm mb-1">By : Jenny Jane</p> */}
          <h2 className="text-xl font-bold mb-1">Crunchy Jokes</h2>
          <a href="#" className="text-yellow-400 text-sm font-semibold underline hover:text-yellow-300">
            Read More
          </a>
        </div>
      </div>
      
    </div>
  );
};

export default ComedyCards;
