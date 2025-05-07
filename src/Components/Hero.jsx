// // // src/Components/Hero.jsx
// // import React from 'react';
// // import { Link } from "react-router-dom";


// // const Hero = () => {
// //   return (
// //     <div className="w-full bg-[#c5d0e9] py-10">
// //       <div className="flex flex-col md:flex-row items-center justify-between h-auto md:h-[600px] w-full px-10">
// //         {/* Text */}
// //         <div className="w-full md:w-[45%] z-10 mb-10 md:mb-0">
// //           <h1 className="text-5xl md:text-7xl font-bold text-[#FF6427] leading-tight">
// //             Laugh Out Loud
// //           </h1>
// //           <p className="text-3xl md:text-5xl font-bold text-black mt-2">
// //             No Seatbelt Required!
// //           </p>
// //           <p className="text-lg md:text-2xl text-black mt-4 max-w-xl">
// //             Step into a world of hilarious truths, outrageous punchlines, and unstoppable chuckles. This isn’t just comedy — it’s a full-blown laugh riot!
// //           </p>

// //           <button className="mt-6 bg-[#FF6800] text-white font-bold px-4 py-2 rounded-lg transition duration-300 hover:bg-orange-500">
// //             Watch Now
// //           </button>
// //         </div>

// //         {/* Image */}
// //         <div className="flex justify-center w-full md:w-[55%] h-full items-center">
// //           <img
// //             src="/src/Images/pic2.png"
// //             alt="Banner"
// //             className="h-full object-contain"
// //           />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Hero;

// // src/Components/Hero.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Hero = () => {
//   return (
//     <div className="w-full bg-[#c5d0e9] py-10">
//       <div className="flex flex-col md:flex-row items-center justify-between h-auto md:h-[600px] w-full px-10">
//         {/* Text */}
//         <div className="w-full md:w-[45%] z-10 mb-10 md:mb-0">
//           <h1 className="text-5xl md:text-7xl font-bold text-[#FF6427] leading-tight">
//             Laugh Out Loud
//           </h1>
//           <p className="text-3xl md:text-5xl font-bold text-black mt-2">
//             No Seatbelt Required!
//           </p>
//           <p className="text-lg md:text-2xl text-black mt-4 max-w-xl">
//             Step into a world of hilarious truths, outrageous punchlines, and unstoppable chuckles. This isn’t just comedy — it’s a full-blown laugh riot!
//           </p>

//           {/* Watch Now Button */}
//           <Link
//             to="Videos/videoplayback.mp4"
//             state={{
//               video: {
//                 id: "local",
//                 name: "Hero Comedy Special",
//                 partner: "Local Partner",
//                 vurl: "/videos/funnyvideo.mp4", // This is the local video path
//               },
//             }}
//             className="inline-block mt-6 bg-[#FF6800] text-white font-bold px-4 py-2 rounded-lg transition duration-300 hover:bg-orange-500"
//           >
//             Watch Now
//           </Link>
//         </div>

//         {/* Image */}
//         <div className="flex justify-center w-full md:w-[55%] h-full items-center">
//           <img
//             src="/src/Images/pic2.png"
//             alt="Banner"
//             className="h-full object-contain"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;


// import React from 'react';
// import { Link } from 'react-router-dom';

// const Hero = () => {
//   return (
//     <div className="w-full bg-[#c5d0e9] py-10">
//       <div className="flex flex-col md:flex-row items-center justify-between h-auto md:h-[600px] w-full px-10">
//         {/* Text */}
//         <div className="w-full md:w-[45%] z-10 mb-10 md:mb-0">
//           <h1 className="text-5xl md:text-7xl font-bold text-[#FF6427] leading-tight">
//             Laugh Out Loud
//           </h1>
//           <p className="text-3xl md:text-5xl font-bold text-black mt-2">
//             No Seatbelt Required!
//           </p>
//           <p className="text-lg md:text-2xl text-black mt-4 max-w-xl">
//             Step into a world of hilarious truths, outrageous punchlines, and unstoppable chuckles. This isn’t just comedy — it’s a full-blown laugh riot!
//           </p>

//           <Link
//             to="/video/local"
//             className="inline-block mt-6 bg-[#FF6800] text-white font-bold px-4 py-2 rounded-lg transition duration-300 hover:bg-orange-500"
//           >
//             Watch Now
//           </Link>
//         </div>

//         {/* Image */}
//         <div className="flex justify-center w-full md:w-[55%] h-full items-center">
//           <img
//             src="/src/Images/pic2.png"
//             alt="Banner"
//             className="h-full object-contain"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;


import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="w-full bg-[#c5d0e9] py-10">
      <div className="flex flex-col md:flex-row items-center justify-between h-auto md:h-[600px] w-full px-10">
        {/* Text */}
        <div className="w-full md:w-[45%] z-10 mb-10 md:mb-0">
          <h1 className="text-5xl md:text-7xl font-bold text-[#FF6427] leading-tight">
            Laugh Out Loud
          </h1>
          <p className="text-3xl md:text-5xl font-bold text-black mt-2">
            No Seatbelt Required!
          </p>
          <p className="text-lg md:text-2xl text-black mt-4 max-w-xl">
            Step into a world of hilarious truths, outrageous punchlines, and unstoppable chuckles. This isn’t just comedy — it’s a full-blown laugh riot!
          </p>

          <Link
            to="/newpage"  // Link updated to the new page
            className="inline-block mt-6 bg-[#FF6800] text-white font-bold px-4 py-2 rounded-lg transition duration-300 hover:bg-orange-500"
          >
            Explore More
          </Link>
        </div>

        {/* Image */}
        <div className="flex justify-center w-full md:w-[55%] h-full items-center">
          <img
            src="pic2.png"
            alt="Banner"
            className="h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

