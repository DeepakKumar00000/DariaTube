
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
