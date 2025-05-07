
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';

import Carousel from './Components/Carousel';
import LoginPage from './Components/LoginPage'; 
import Footer from './Components/Footer';
import BlogSection from './Components/BlogSection';
import UpcomingShows from './Components/UpcomingShows';
import ComedyCards from './Components/ComedyCards';
import ComedyCardsVideos from './Components/ComedyCardsVideos';
import VideoPlayerPage from './Components/VideoPlayerPage'; 
import Hero from './Components/Hero';
import NewPage from './Components/NewPage';  

// Homepage component
function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Carousel />
      <ComedyCardsVideos/>
      <UpcomingShows />
      <BlogSection />
      <ComedyCards />
      <Footer />
    </>
  );
}

// App component with routing
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/video/:id" element={<VideoPlayerPage />} />
      <Route path="/newpage" element={<NewPage />} />  {/* Add the new page route */}
    </Routes>
  );
}

export default App;
