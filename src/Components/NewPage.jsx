

import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const NewPage = () => {
  return (
    <>
    <Navbar />
    <div className="flex flex-col md:flex-row items-center justify-center py-10 px-4 w-full min-h-screen bg-white">
      
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
        <img 
          src="/khadoo.jpg"
          alt="Khadoo"
          className="w-[90%] max-w-[500px] h-auto rounded-xl object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 px-4">
        <p className="text-lg md:text-xl text-black font-[sans] leading-relaxed text-justify">
          Welcome to <span className="font-bold ">Laugh Out Loud – No Seatbelt Required!</span>, your ultimate destination for non-stop hilarity and carefree fun. Step into a world where punchlines fly faster than logic, and every moment is packed with side-splitting jokes, outrageous sketches, and unpredictable comedy gold. From savage roasts to quirky skits and everyday absurdities turned hilarious, we deliver the kind of laughter that hits you out of nowhere and leaves you gasping for air. Whether you're here for a quick chuckle or a full-blown laugh attack, this isn’t just comedy — it’s a riot you’ll want front-row seats to (but no seatbelt needed). Buckle up — or don’t — and get ready for the ride of your funny bone's life!Khadoo wasn’t born funny — he was accidentally hilarious. Hailing from a tiny town where cows had more fans than comedians, Khadoo discovered his knack for comedy after getting laughed at during a school play — for forgetting his lines and improvising with chicken noises. That moment sparked a legend.Armed with nothing but a crooked smile, unmatched confidence, and a brain wired like a stand-up sketch, Khadoo turned awkwardness into art. 
        </p>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default NewPage;
 
